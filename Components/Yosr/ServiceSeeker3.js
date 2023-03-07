import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} 
from "react-native";



export default function ServiceSeeker3() {
  const [Name, setname] = useState("");
  const [Description, setDescription] = useState("");
 
  
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../Yosr/imag.png")} />
      

      <StatusBar style="auto" />
      <Text style={styles.text} >Name:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input Name "
          placeholderTextColor="#003f5c"
          onChangeText={(Name) => setname(Name)}
        /> 
      </View> 
      <Text style={styles.text1}>Cv:</Text>
       <View > 
      <TouchableOpacity style={styles.UploadCVBtn}>
        <Text style={styles.loginText1}>UploadCV</Text> 
      </TouchableOpacity> 
      </View> 
      
      <Text style={styles.text}> Description:</Text>
    
      <View style={styles.inputView1}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Original description should be here "
          placeholderTextColor="#003f5c"
          onChangeText={(Description) => setDescription(Description)}
        /> 
      </View> 
      <View>
      <TouchableOpacity style={styles.SaveBtn}>
        <Text style={styles.loginText}>Save</Text> 
      </TouchableOpacity> 

  
    </View> 
    
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 100,
    position: "absolute",
    width: 110,
    height:110,
    
   
  top :50,
    bottom: 100
  ,
  
 
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderColor:"#18C0C1",
    borderWidth:1,

    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    marginTop:10,
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
    height:30,
    alignItems: "center" ,
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
    marginBottom:40,
marginTop:8,

right:40,

  },
  loginText1:{ 
    color:'#FFFFFF', 
    fontSize:11,
  },
  loginText:{ 
    color:'#FFFFFF', 
    fontSize:18,
  },
  text:{ 
    right:90,
  },
  text1:{ 
    right:110,
  },
  inputView1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderColor:"#18C0C1",
    borderWidth:1,
    width: "70%",
    height: 130,
    marginBottom: 20,
    alignItems: "center",
    marginTop:10,
  },
  
 
 
  
});