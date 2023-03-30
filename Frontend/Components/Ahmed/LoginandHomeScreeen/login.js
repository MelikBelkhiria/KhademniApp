import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,Image
} from 'react-native';
import Input from "../../Melik/src/views/components/Input";
import Button from "../../Melik/src/views/components/Button";
import COLORS from "../../Melik/src/conts/colors";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
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
          <Button title="Se connecter" onPress={navigation.navigate("DrawNavi")} />
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