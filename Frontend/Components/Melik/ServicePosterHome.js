import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { React, useState, useEffect,useCallback } from 'react';
import Card from './Card';
import ConfirmCard from './ConfirmCard'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';


export default function ServicePosterHome({ navigation }) {
  const [myServices, setMyServices] = useState([]);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.get('http://192.168.1.25:3001/myTasks', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setMyServices(response.data);
      console.log("the response",response.data)
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );



  return (
    <ImageBackground source={require('../../assets/image5.png')} style={Melik.container}>
      <View style={Melik.row}>
        <Text style={Melik.text}>Bienvenue!</Text>
        <Pressable onPress={() => navigation.navigate('profileposterforposter')}>
          <Image
            source={{
              uri: 'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg',
            }}
            style={Melik.image}
          />
        </Pressable>
      </View>
      <ScrollView>
      {myServices.map((service, index) => (
        <>
        <Card
          key={service.service_id}
          Title={service.title}
          Statut={service.service_status}
          Date={service.start_time}
          onPress={() => {
            
            if (service.service_status === 'pending') {
              navigation.navigate('Confirmation', {
                Title: service.title,
                Statut: service.service_status,
                Date: service.start_time,
                uri: 'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg',
                onConfirm: () => onConfirm(service.service_id),
                Service_id: service.service_id
              });
            }
          }}
        /></>
      ))}
      </ScrollView>
      <TouchableOpacity style={Melik.addButton} onPress={() => navigation.navigate('ServicePoster5')}>
        <Text style={Melik.addButtonText}>+</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const Melik = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 60
  },
  row: {
    width: "80%",
    flexDirection: 'row',
    alignItems: 'space-between'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  addButton: {
    marginTop: 20,
    alignSelf: 'center', // Center the button along the horizontal axis
    backgroundColor: '#18C0C1',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
