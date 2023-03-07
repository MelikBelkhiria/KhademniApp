import AsyncStorage from "@react-native-async-storage/async-storage";
import {React, useState} from 'react'
import {SafeAreaView, View, ScrollView, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import Picker from '@react-native-picker/picker'
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../../conts/colors";
import Button from "../components/Button";
import Input from "../components/Input";

const RegistrationScreen = ({navigation}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [email, setEmail] = useState('');
    const options = ['Employeur', 'Travailleur'];

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

    const handleEmailChange = (value) => {
      setEmail(value);
    }

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const handleCreateAccount = () => {
      if(!validateEmail()) {
        alert('Please enter a valid email address');
        return;
      }
      // Handle account creation logic here
    }

    return (

      <SafeAreaView style={{backgroundColor: Colors.white, flex:1}}>

        <ScrollView contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
        }}>

            
          <Text style={{color: COLORS.black, fontSize: 39, fontWeight: 'bold',}}> Créer un compte</Text>
          <Text style={{color: COLORS.green, fontSize: 18, fontWeight: 'bold', marginVertical: 10,}}> Veuillez compléter ces informations:</Text>
          <View style={{marginVertical: 20}}>
            <Input placeholder="Entrer votre adresse email" iconName="email-outline" label="Email" value={email} onChangeText={handleEmailChange}/>
            <Input placeholder="Entrer votre nom complet" iconName="account-outline" label="Fullname"/>
            <View style={[styles.dropdown,{marginBottom:120}]}>
              <TouchableOpacity style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>
                  {selectedOption || 'Select an option'}
                </Text>
              </TouchableOpacity>
              <View style={styles.dropdownList}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownListItem}
                    onPress={() => handleOptionSelect(option)}
                  >
                    <Text style={{color:"#18C0C1", fontWeight:'bold'}}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>


              <Input placeholder="Entrer votre numéro de téléphone" iconName="phone-outline" label="Phone Number"/>
              <Input placeholder="Enter votre mot de passe" iconName="lock-outline" label="Password" password/>
            <Button title="Créer" onPress={handleCreateAccount}/>

            <Text
                onPress={()=>navigation.navigate('LoginScreen')}
                style={{
                color: COLORS.black,
                textAlign:'center',
                fontSize:16,
                fontWeight: 'bold',
                marginVertical:20
            }}>
            Vous avez déjà un compte? Se connecter
            </Text>
          </View>
        </ScrollView>
         </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dropdown: {
      position: 'relative',
      width: '100%',
      alignItems: 'center',
      zIndex: 1,
    },
    dropdownButton: {
        backgroundColor: '#18C0C1',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#18C0C1',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    dropdownButtonText: {
      fontSize: 16,
      fontWeight:'bold',
      color:COLORS.white
    },
    dropdownList: {
      position: 'absolute',
      top: '100%',
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#18C0C1',
      padding: 10,
      maxHeight: 150,
      overflow: 'scroll',
      zIndex: 2,
      
    },
    dropdownListItem: {
      paddingVertical: 10,
    },
});

export default RegistrationScreen
