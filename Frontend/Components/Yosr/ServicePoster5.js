import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity, ImageBackground, Platform, ScrollView
}

  from "react-native";
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ServicePoster5({ navigation }) {
  const [title, settitle] = useState("");
  const [location, setlocation] = useState("");
  const [Price, setprice] = useState("");
  const [domain, setDomain] = useState("");
  const [duration, setDuration] = useState(0);
  const [Description, setDescription] = useState("");
  const [Bar, setBar] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [start_time, setstart_time] = useState("");

  const onChange = (event, selectedDate) => {
const currentDate = selectedDate || date ;
    setShow(Platform.OS === 'ios');
    setDate(currentDate)

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear()  + '-' + (tempDate.getMonth() + 1) + '-' +  tempDate.getDate();
    let fTime =  tempDate.getHours() + ':' + tempDate.getMinutes();
    setstart_time(fDate + ' ' + fTime)

    console.log(fDate + '(' + fTime + ')')
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }


  const handleApplication = async (e) => {
    e.preventDefault();
    try {
      const token = await AsyncStorage.getItem('authToken');

      await axios.post("http://192.168.1.45:3001/api/postService", {
        title: title,
        location: location,
        price: Price,
        duration:duration,
        domain:domain,
        description: Description,
        start_time:start_time
      }, {
        headers: {
            'Authorization': `Bearer ${token}`}});
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <ScrollView>
      <ImageBackground source={require("../../assets/image5.png")} style={styles.container}>
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
        <Text style={styles.text2} > duration:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input duration "
            placeholderTextColor="#003f5c"
            keyboardType="numeric"

            onChangeText={(duration) => setDuration(duration)}
          />
        </View>
        <Text style={styles.text2} > Domain:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Input Domain "
            placeholderTextColor="#003f5c"
      

            onChangeText={(Domain) => setDomain(Domain)}
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
        
          <View style={styles.datecontainer}>
            <View style={styles.buttoncontainer1}>
              <TouchableOpacity style={styles.buttondate} title='Select Date' onPress={() => showMode('date')}>
                <Text style={styles.loginText}>Select Date</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttoncontainer2}>
            <TouchableOpacity style={styles.buttondate} title='Select Time' onPress={() => showMode('time')}>
              <Text style={styles.loginText}>Select Time</Text>
            </TouchableOpacity>
          </View>
          
        </View>


        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24hour={true}
            display="default"
            onChange={onChange}


          />
        )}

      </View>
      <Text style={styles.texttime}> {start_time} </Text>
      <View>
        <TouchableOpacity style={styles.PostBtn} onPress={handleApplication}>
          <Text style={styles.loginText}>POST</Text>
        </TouchableOpacity>
      </View>
      <View>

      </View>


    </ImageBackground>
  </ScrollView >
  );
}

const styles = StyleSheet.create({
  datecontainer: {
    flexDirection: 'row',
    marginBottom:10
  
  },
  buttondate: {
    backgroundColor: '#43d5d5',
    borderRadius:8,
    width:100,
    height: 30,
    alignItems: "center",
  },
  buttoncontainer1 :{
    marginRight: 20,
   

  },
  texttime:{
    fontWeight:'bold',
   fontSize:20
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 50,
    resizeMode: "contain",
    width: 100,
    height: 100,

  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    width: "80%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#18C0C1",
    borderWidth: 1,
  },
  inputView1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    width: 300,
    height: 145,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#18C0C1",
    borderWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,

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
    backgroundColor: "#18C0C1",
  },
  text: {
    right: 90,
  },
  text1: {
    right: 110,
  },
  text2: {
    right: 110,
  },
  text3: {
    right: 100,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 15,
  },




});