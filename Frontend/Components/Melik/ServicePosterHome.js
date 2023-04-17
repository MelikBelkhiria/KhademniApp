import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { React, useState,useEffect } from 'react';
import Card from './Card';
import ConfirmCard from './ConfirmCard'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native';


export default function ServicePosterHome({ navigation }) {
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    fetch('http://192.168.49.51:3001/myTasks')
      .then((response) => response.json())
      .then((data) => setMyServices(data)).then((data)=>console.log(data))
      .catch((error) => console.error(error));
  }, []);
  
  const updateServiceStatus = (id, newStatus) => {
    setMyServices((prevServices) => {
      const updatedServices = prevServices.map((service) => {
        if (service.application_id === id) {
          return { ...service, application_status: newStatus };
        } else {
          return service;
        }
      });
      return updatedServices;
    });
  };

  const onConfirm = (id) => {
    updateServiceStatus(id, 'Recruté');
  };

  return (
    <ImageBackground source={require('../../assets/image5.png')} style={Melik.container}>
      <View style={Melik.row}>
        <Text style={Melik.text}>Bienvenue Samira Jannet!</Text>
        <Pressable onPress={() => navigation.navigate('profileposterforposter')}>
          <Image
            source={{
              uri: 'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg',
            }}
            style={Melik.image}
          />
        </Pressable>
      </View>
      {myServices.map((service, index) => (
        <Card
          key={service.application_id}
          Title={service.title}
          Statut={service.application_status}
          Date={service.date}
          onPress={() => {
            if (service.application_status === 'En Attente') {
              navigation.navigate('Confirmation', {
                Title: service.title,
                Statut: service.application_status,
                Date: service.date,
                uri: 'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg',
                onConfirm: () => onConfirm(service.application_id),
              });
            }
          }}
        />
      ))}
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
    alignItems: 'center'
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
