import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet, Image,
  FlatList,
  ImageBackground
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import io from 'socket.io-client';
import { Picker } from '@react-native-picker/picker';

const Service = ({ setServiceHide, setSelectedService, setSelectedApplicant }) => {
  const [services, setServices] = useState([]);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    async function fetchUserType() {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserType(decodedToken.userType);
      }
    }
    fetchUserType();
  }, []);

  useEffect(() => {
    const api = axios.create({
      baseURL: 'http://192.168.1.25:3001'
    });

    async function fetchServices() {
      const token = await AsyncStorage.getItem('authToken');
      api.get('/services', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.data)
        .then((data) => {
          setServices(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    fetchServices();
  }, []);

  const renderItem = ({ item }) => {
    const renderApplicants = (applicants) => (
      <View>
        {applicants.map((applicant, index) => (
          <TouchableOpacity
            key={index}
            style={styling.applicantName}
            onPress={() => {
              if (userType === 'employer') {
                setServiceHide(true);
                setSelectedApplicant({applicantId: applicant.job_seeker_id})
                setSelectedService({
                  name: applicant.applicant_name,
                  profile_pic_url: applicant.applicant_profile_pic,
                  service_id: item.service_id,
                  recipientId: applicant.job_seeker_id,
                });
              }
            }}
          >
            <Text style={{fontSize:18,color:"white"}}>
              {applicant.applicant_name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
    
  
    return (
      <TouchableOpacity
        style={styling.card}
        onPress={() => {
          setServiceHide(true);
          setSelectedService({
            name: userType === 'employer' ? item.applicant_name : item.employer_name,
            profile_pic_url: userType === 'employer' ? item.applicant_profile_pic : item.employer_profile_pic,
            service_id: item.service_id, // add service_id to selected service
            recipientId: userType === 'employer' ? item.job_seeker_id : item.employer_id, // add recipientId to selected service
          });
        }}
      >
        <Text style={styling.cardTitle}>{item.title}</Text>
        {userType === 'employer' && renderApplicants(item.applicants)}
      </TouchableOpacity>
    );
  };
  

  return (
    <ImageBackground source={require("../../assets/image5.png")} style={styling.container}>
      <Text style={styling.title}>Your Services</Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.service_id.toString()}
        contentContainerStyle={styling.servicesContainer}
      />
    </ImageBackground>
  );
};
const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: "black",
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,

  },
  servicesContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4DAF8C",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#555",
  },
  applicantName: {
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#4DAF8C",
    borderRadius: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: "#4DAF8C",


 }
  
  
});

const BackArrow = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png" }} style={{ width: 30, height: 30, marginLeft: 10, transform: [{ rotate: '180deg' }] }}></Image>
  </TouchableOpacity>
);
const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [serviceHide, setServiceHide] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [lastSender, setLastSender] = useState('');
  const [selectedApplicant,setSelectedApplicant]= useState({applicantId: ""})
  const [selectedService, setSelectedService] = useState({ name: '', profile_pic_url: '' });
  const [token, setToken] = useState(null);


  const handleBackPress = () => {
    setServiceHide(false);
  };

  useEffect(() => {
    const initSocket = async () => {
      console.log("Initializing socket...");

      // fetch token from storage
      const token = await AsyncStorage.getItem("authToken");
      console.log("the",jwtDecode(token))
      const userType= jwtDecode(token).userType
      const id= jwtDecode(token).id
      console.log("this is",userType)
      console.log("this is ", id)
      if (!token) {
        console.error("No auth token found");
        return;
      }
      setToken(token);


      // connect to socket.io server
      const socket = io("http://192.168.1.25:3001", {
        auth: {
          token: token,
        },
      });
      setSocket(socket);

      // join the chat room
      if (userType === 'employer') {
        console.log("Selected applicant:", selectedApplicant);
console.log("Selected service:", selectedService);

        socket.emit("joinChat", {
          serviceId: selectedService.service_id,
          seekerId: selectedApplicant.applicantId,
        });
      } else if (userType === 'job_seeker') {
        console.log("chatidseek",id)
        console.log( selectedService.service_id)
        socket.emit("joinChat", {
          serviceId: selectedService.service_id,
          seekerId: id,
        });
      } else {
        console.error('Invalid user role');
      }
      console.log("Joining chat room with serviceId:", selectedService.service_id, "and seekerId:", selectedApplicant.applicantId);

      // listen for incoming messages
      socket.on("receiveMessage", (data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...data, senderId: data.senderId },
        ]);
      });
    };

    if (selectedService.service_id && !socket) {
      initSocket();
    }

    return () => {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    };
  }, [selectedService]);

  useEffect(() => {
    if (selectedService.service_id) {
      fetchChatHistory();
    }
  }, [selectedService,selectedApplicant]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const api = axios.create({ 
        baseURL: 'http://192.168.1.25:3001'
      });

      const data = {
        serviceId: selectedService.service_id, // set serviceId
        senderId: jwtDecode(token).id, // set senderId
        recipientId: selectedService.recipientId, // set recipientId
        message: message.trim(),
      };

      try {
        const token = await AsyncStorage.getItem('authToken');
        await api.post('/chat/sendMessage', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages([
          ...messages,
          { id: messages.length + 1, senderId: jwtDecode(token).id, message: message.trim() }, // Use the message property instead of text
        ]);
        setMessage('');
      } catch (error) {
        console.error(error);
      }
    }
  };



  const fetchChatHistory = async () => {
    try {
      const api = axios.create({
        baseURL: 'http://192.168.1.25:3001'
      });
  
      const token = await AsyncStorage.getItem('authToken');
      const userType= jwtDecode(token).userType


      let response;
      if (userType === 'employer') {
        response = await api.get(`/chat/history/${selectedService.service_id}?applicantId=${selectedApplicant.applicantId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await api.get(`/chat/history/${selectedService.service_id}?employerId=${selectedService.recipientId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      
      const data = response.data.map((msg) => ({
        ...msg,
        senderId: msg.sender_id,
      }));
      setMessages(data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      {serviceHide ?
        <><View style={{ display: "flex", flexDirection: "row", margin: 10, justifyContent: "space-around", alignItems: "center", borderWidth: 1, borderRadius: 20, borderColor: "#4DAF8C" }}>
          <BackArrow onPress={handleBackPress} />

          <Image
            style={{ borderRadius: 50, width: 90, height: 90 }}
            source={{ uri: selectedService.profile_pic_url }}
          ></Image>
          <Text style={{ fontSize: 20 }}>{selectedService.name}</Text>

        </View>
          <ScrollView
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContentContainer}
            keyboardShouldPersistTaps="handled"
            ref={(ref) => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() => {
              this.scrollView.scrollToEnd({ animated: true });
            }}
          >
            {messages.map((msg, index) => (
              <View
                key={msg.id || index} // Use msg.id if available, otherwise use index
                style={[
                  styles.messageBubble,
                  msg.senderId === jwtDecode(token).id ? styles.rightBubble : styles.leftBubble, // Compare senderId with the current user's ID
                ]}
              >
                <Text style={[styles.messageText, { color: msg.senderId === jwtDecode(token).id ? "white" : "black" }]}>{msg.message}</Text>
              </View>
            ))}



          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Entrez votre message..."
              value={message}
              onChangeText={(text) => setMessage(text)}
              onSubmitEditing={handleSendMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2983/2983788.png" }} style={{ width: 30, height: 30 }}></Image>
            </TouchableOpacity>
          </View></> : <Service setServiceHide={setServiceHide} setSelectedService={setSelectedService} setSelectedApplicant={setSelectedApplicant}></Service>}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",

  },
  messagesContainer: {
    flex: 1,
  },
  messagesContentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  messageBubble: {
    maxWidth: "70%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  leftBubble: {
    borderWidth: 1,
    borderColor: "#4DAF8C",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  rightBubble: {
    backgroundColor: "#4DAF8C",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },

  messageText: {
    fontSize: 16,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#4DAF8C",
    borderRadius: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
  },
  sendButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#4DAF8C",
    borderRadius: 25,
  },
  sendButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});



export default Chat;
