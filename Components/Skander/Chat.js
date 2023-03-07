import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,Image
} from "react-native";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastSender, setLastSender] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastSender === "me") {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: "other",
            text: "Okay",
          },
        ]);
        setLastSender("other");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [messages, lastSender]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "me", text: message.trim() },
      ]);
      setMessage("");
      setLastSender("me");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{display:"flex",flexDirection:"row",margin:10,justifyContent:"space-around",alignItems:"center",borderWidth:1,borderRadius:20,borderColor:"#4DAF8C"}}>
      <Image style={{ borderRadius: 50, width: 90, height: 90}} source={{ uri: "https://www.themoviedb.org/t/p/original/iWdKjMry5Pt7vmxU7bmOQsIUyHa.jpg "}}></Image>
      <Text style={{fontSize:20}}>Hamza Ben Ghorbel</Text>
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
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.sender === "me" ? styles.rightBubble : styles.leftBubble,
            ]}
          >
            <Text style={[styles.messageText,{color: msg.sender==="me" ? "white": "black"}]}>{msg.text}</Text>
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
          <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2983/2983788.png"}} style={{width:30,height:30}}></Image>
        </TouchableOpacity>
      </View>
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
    borderWidth:1,
    borderColor:"#4DAF8C",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 16,
  },
  rightBubble: {
    backgroundColor: "#4DAF8C",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 16,
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
