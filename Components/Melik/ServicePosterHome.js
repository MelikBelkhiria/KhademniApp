import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {React, useState} from 'react';
import Card from './Card';
import ConfirmCard from './ConfirmCard'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ServicePosterHome({navigation}) {
  const [myServices,setMyServices] =useState( [
    { id:0 ,Title: 'Jardinage', Statut: 'En Attente', Date: '14/02/2023' },
    { id:1 ,Title: 'Promener Le Chien', Statut: 'Recruté', Date: '14/02/2023' }
  ]);

  const updateServiceStatus = (id, newStatus) => {
    setMyServices((prevServices) => {
      const updatedServices = prevServices.map((service) => {
        if (service.id === id) {
          return { ...service, Statut: newStatus };
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
    <View style={Melik.container}>
      <View style={Melik.row}>
        <Text style={Melik.text}>Bienvenue Samira Jannet!</Text>
        <Image
          source={{
            uri: 'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg'
          }}
          style={Melik.image}
        />
      </View>
      {myServices.map((service, index) => (
        <Card key={index} Title={service.Title} Statut={service.Statut} Date={service.Date} onPress={() => {
            if (service.Statut === 'En Attente') {
              navigation.navigate('Confirmation', { Title:service.Title, Statut: service.Statut, Date: service.Date, uri:'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg', onConfirm:onConfirm});}}} />
      ))}

      
      
      <TouchableOpacity style={Melik.addButton}>
        <Text style={Melik.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const Melik = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 60
  },
  row: {
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
    marginTop:20,
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
