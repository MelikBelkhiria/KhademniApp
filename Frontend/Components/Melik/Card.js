import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Card(props) {

    const handlePress = () => {
        if (props.Statut === 'pending') {
          props.onPress();
        }
    };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row1}>
          <Text style={styles.text}>{props.Title}</Text>
          <Text style={[styles.text, styles.statutText, styles.smallText, props.Statut === 'pending' ? styles.yellowBackground : styles.greenBackground]}>{props.Statut}</Text>
        </View>
        <View style={styles.row2}>
          <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/city-elements-16/66/37-512.png' }} style={styles.image} />
          <Text style={[styles.text, styles.smallText]}>{"Start time: " + new Intl.DateTimeFormat('en-US', { 
  year: 'numeric', 
  month: 'short', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  hour12: true 
}).format(new Date(props.Date))}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    width: 350,
    height: 130,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'bold'
  },
  smallText: {
    fontSize: 11,
  },
  statutText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold'
  },
  yellowBackground: {
    backgroundColor: 'yellow'
  },

  greenBackground: {
    backgroundColor: '#5EEA85'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
