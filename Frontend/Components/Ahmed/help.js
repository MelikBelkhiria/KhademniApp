import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const highlightColor = '#18C0C1';

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>What kind of services can I offer through the app?</Text>
        <Text style={styles.answer}>The app offers a variety of services, including cleaning, pet care, handyman work, and many others. You can choose which services you want to offer and set your own rates.</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.heading}>How much money can I make through the app?</Text>
        <Text style={styles.answer}>The amount of money you can make through the app depends on how many services you offer and how much you charge for them. Some service providers earn a full-time income through the app, while others use it to supplement their existing income.</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.heading}>How do I get paid for the services I provide?</Text>
        <Text style={styles.answer}>You will receive payment for your services directly from the clients you work with through the app. The app handles all payment transactions securely and efficiently.</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.heading}>How do I find clients to work with through the app?</Text>
        <Text style={styles.answer}>The app has a built-in matching system that connects service providers with clients who are looking for their specific services. You can also promote your services on social media and other channels to attract new clients.</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.heading}>What kind of support is available if I have questions or issues with the app?</Text>
        <Text style={styles.answer}>The app offers comprehensive help and support resources, including a detailed FAQ section, online tutorials, and email support. If you need further assistance, you can also contact the app's customer service team for personalized support.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: highlightColor,
    marginBottom: 10,
  },
  answer: {
    fontSize: 18,
    color: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: highlightColor,
    marginVertical: 20,
  },
});
