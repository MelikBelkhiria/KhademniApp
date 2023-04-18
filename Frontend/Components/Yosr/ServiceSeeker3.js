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
        <Text style={styles.text} >full_name:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input full_name "
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
        <Text style={styles.text} >address:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input address "
            placeholderTextColor="#003f5c"
            onChangeText={(address) => setaddress(address)}
          />
        </View>
        <Text style={styles.text} >interests:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input interests "
            placeholderTextColor="#003f5c"
            onChangeText={(interests) => setinterests(interests)}
          />
        </View>
        <Text style={styles.text} >Phone_Number:</Text>
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
    backgroundColor: "white",

  },
  inputcontainer: {
    alignItems: "center"
  },
  image: {
    marginBottom: 100,
    position: "absolute",
    width: 110,
    height: 110,


    top: 50,
    bottom: 100
    ,


  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderColor: "#18C0C1",
    borderWidth: 1,

    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 10,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,

  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  SaveBtn: {
    width: 180,
    borderRadius: 12,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#18C0C1",
  },
  UploadCVBtn: {
    width: 180,
    borderRadius: 12,
    height: 35,
    justifyContent: "center",
    backgroundColor: "#18C0C1",
    display: "flex",
    alignItems: "center",
    padding: 10,
    gap: 10,
    marginBottom: 40,
    marginTop: 8,

    right: 40,

  },
  loginText1: {
    color: '#FFFFFF',
    fontSize: 11,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  text: {
    right: 90,
  },
  text1: {
    right: 110,
  },
  inputView1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderColor: "#18C0C1",
    borderWidth: 1,
    width: "70%",
    height: 130,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 10,
  },




});