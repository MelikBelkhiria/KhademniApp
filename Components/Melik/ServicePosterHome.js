import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ServicePosterHome({navigation}) {
  const myServices = [
    { Title: 'Jardinage', Statut: 'En Attente', Date: '14/02/2023' },
    { Title: 'Promener Le Chien', Statut: 'Recruté', Date: '14/02/2023' }
  ];

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
              navigation.navigate('Confirmation', { Title:service.Title, Statut: service.Statut, Date: service.Date, uri:'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg'});}}} />
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
