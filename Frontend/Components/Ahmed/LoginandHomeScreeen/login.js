import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native';
import axios from 'axios';
import Input from "../../Melik/src/views/components/Input";
import Button from "../../Melik/src/views/components/Button";
import COLORS from "../../Melik/src/conts/colors";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.1.25:3001/api/auth/login", {
        email,
        password,
      });

  
      const {token}  = response.data;
  
      // Store the JWT token in AsyncStorage
      await AsyncStorage.setItem('authToken', token);
  
      const decodedToken = jwtDecode(token);

      console.log(decodedToken);

      const userType = decodedToken.userType;
      console.log('User Type in front-end:', userType); // Add this line

      if (userType === 'employer') {
        navigation.navigate('DrawNavi', { userType: 'employer' });
      } else {
        navigation.navigate('DrawNavi', { userType: 'job_seeker' });
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };
  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text
          style={{ color: COLORS.black, fontSize: 39, fontWeight: 'bold' }}>
          Connexion
        </Text>
        <Text
          style={{ color: COLORS.green, fontSize: 18, fontWeight: 'bold' }}>
          Entrez vos identifiants
        </Text>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image style={styles.image} source={require('./mobile-login-concept-.webp')} /></View>
        <View>
          <Input
            placeholder="Adresse email"
            iconName="email-outline"
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            placeholder="Mot de passe"
            iconName="lock-outline"
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            password
          />
          <Button title="Se connecter" onPress={handleLogin} />
          <Text
            style={{
              color: COLORS.black,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              marginVertical: 20,
            }}>
            Vous n'avez pas de compte?{' '}
            <Text
              onPress={() => navigation.navigate('RegistrationScreen')}
              style={{ color: COLORS.green }}>
              Créer un compte
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

    image: {

        resizeMode:"cover",
        height:240,
        width:240


    },





})