import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from './Components/Melik/Confirmation'
import ServicePosterHome from './Components/Melik/ServicePosterHome';
import RegistrationScreen from './Components/Melik/src/views/screens/RegistrationsScreen';
import Navigation from "./Navigation/Navigation"
import Login from './Components/Ahmed/LoginandHomeScreeen/login';
import Home from "./Components/Ahmed/LoginandHomeScreeen/homescreen"
import ProfileposterForseeker from './Components/Ahmed/ProfileposterForseeker';
import Profileofseekerforseeker from './Components/Ahmed/profileofseekerforseeker'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="profileposterForseeker">
        <Stack.Screen options={{headerShown:false}} name="ServicePoster" component={ServicePosterHome} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="profileofseekerforseeker" component={Profileofseekerforseeker}/>
        <Stack.Screen name="profileposterForseeker" component={ProfileposterForseeker}/>
        <Stack.Screen name="login" component={Login}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
