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



export default function ServicePoster5({navigation}) {
  const [title, settitle] = useState("");
  const [location, setlocation] = useState("");
  const [Price, setprice] = useState("");
  const [Description, setDescription] = useState("");
  const [Bar, setBar] = useState("");

 
  
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../Yosr/imageee.png")} />
      

      <StatusBar style="auto" />
      <Text style={styles.text1} > Title : </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input title "
          placeholderTextColor="#003f5c"
          onChangeText={(title) => settitle(title)}
        /> 
      </View> 
      <Text style={styles.text3} > Location : </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Original Location should be here "
          placeholderTextColor="#003f5c"
          
          onChangeText={(location) => setlocation(location)}
        /> 
      </View> 
      <Text style={styles.text2} > Price:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input Price "
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          
          onChangeText={(Price) => setprice(Price)}
        /> 
      </View> 
      <Text style={styles.text}> Description: </Text>
    
      <View style={styles.inputView1}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Original description should be here "
          placeholderTextColor="#003f5c"
          onChangeText={(Description) => setDescription(Description)}
        /> 
      </View> 
      <View>
      <TouchableOpacity style={styles.PostBtn} onPress={()=>navigation.navigate("ServicePosterHome")}>
        <Text style={styles.loginText}>POST</Text> 
      </TouchableOpacity> 
    </View> 
    <View>
    
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
    resizeMode:"contain",
    width: 160,
    height: 160,

  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    width: "80%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    borderColor:"#18C0C1",
    borderWidth:1,
  },
  inputView1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    width: 300,
    height: 145,
    marginBottom: 20,
    alignItems: "center",
    borderColor:"#18C0C1",
    borderWidth:1,
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
  PostBtn: {
    width: 150,
    borderRadius: 12,
   
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#18C0C1",
  },
  text:{ 
    right:90,
  },
  text1:{ 
    right:110,
  },
  text2:{ 
    right:110,
  },
  text3:{ 
    right:100,
  },
  loginText:{ 
    color:'#FFFFFF', 
    fontSize:15,
  },

 
 
  
});