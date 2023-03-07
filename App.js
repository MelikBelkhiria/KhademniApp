import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from './Components/Melik/Confirmation'
import ServicePosterHome from './Components/Melik/ServicePosterHome';
import RegistrationScreen from './Components/Melik/src/views/screens/RegistrationsScreen';
import Navigation from "./Navigation/Navigation"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="RegistrationScreen">
        <Stack.Screen options={{headerShown:false}} name="Home" component={ServicePosterHome} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
