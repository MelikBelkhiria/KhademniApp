import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
}
  from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';





export default function ServiceSeeker3({ navigation }) {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setaddress] = useState("");
  const [interests, setinterests] = useState("");
  const [description, setDescription] = useState("")
  const [userType,setUserType]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const userType = jwtDecode(token).userType;
      setUserType(userType)
      // do something with userType
    };
  
    fetchData();
  }, []);
  
  

  const handleApplication = async (e) => {
    e.preventDefault();
    try {

      await axios.post("http://192.168.1.25:3001/api/updateUserProfile", {
        full_name: full_name,
        email: email,
        phone_number: phone_number,
        address: address,
        interests: interests,
        description: description

      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }, { withCredentials: true });
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputcontainer}>

        <Image style={styles.image} source={require("../Yosr/imag.png")} />


        <StatusBar style="auto" />
        <Text style={styles.text} >Full Name:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input full name "
            placeholderTextColor="#003f5c"
            onChangeText={(full_name) => setFull_name(full_name)}
          />
        </View>
        <Text style={styles.text} >Email:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input Email "
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <Text style={styles.text} >Address:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input address "
            placeholderTextColor="#003f5c"
            onChangeText={(address) => setaddress(address)}
          />
        </View>
        <Text style={styles.text} >Interests:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input interests "
            placeholderTextColor="#003f5c"
            onChangeText={(interests) => setinterests(interests)}
          />
        </View>
        <Text style={styles.text} >Phone Number:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input Phone_Number "
            placeholderTextColor="#003f5c"
            keyboardType="numeric"

            onChangeText={(phone_number) => setPhone_number(phone_number)}
          />
        </View>
        {userType === "job_seeker" && <><Text style={styles.text1}>Cv:</Text><View >
          <TouchableOpacity style={styles.UploadCVBtn}>
            <Text style={styles.loginText1}>UploadCV</Text>
          </TouchableOpacity>
        </View></>}


        <Text style={styles.text}> Description:</Text>

        <View style={styles.inputView1}>

          <TextInput
            style={styles.TextInput}
            placeholder="Original description should be here "
            placeholderTextColor="#003f5c"
            onChangeText={(description) => setDescription(description)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.SaveBtn} onPress={handleApplication}>
            <Text style={styles.loginText}>Save</Text>
          </TouchableOpacity>


        </View>

      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputcontainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    color: '#18C0C1',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  text1: {
    color: '#18C0C1',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  inputView: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    width: '100%',
    height:60,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputView1: {
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    width: '100%',
    height: 100,
    marginBottom: 20,
    justifyContent: 'flex-start',
    padding: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    fontSize: 16,
  },
  SaveBtn: {
    width: 180,
    height: 50,
    backgroundColor: '#18C0C1',
    borderRadius: 30,
    justifyContent: 'center',
marginBottom:15,
  },
  UploadCVBtn: {
    width: 180,
    height: 50, /* Changed height to 50 */
    backgroundColor: '#18C0C1',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 30, /* Changed marginTop to 30 */
    marginBottom: 10, /* Changed marginBottom to 10 */
  }
,  
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});