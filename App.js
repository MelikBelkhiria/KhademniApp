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
import Profileofseekerforseeker from './Components/Ahmed/profileofseekerforseeker';
import ServicePoster3 from './Components/Yosr/ServicePoster3';
import ServicePoster5 from './Components/Yosr/ServicePoster5';
import ServiceSeeker3 from './Components/Yosr/ServiceSeeker3';
import Search from './Components/Nour/Search'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen options={{headerShown:false}} name="ServicePoster" component={ServicePosterHome} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="profileofseekerforseeker" component={Profileofseekerforseeker}/>
        <Stack.Screen name="profileposterForseeker" component={ProfileposterForseeker}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="ServicePoster3" component={ServicePoster3}/>
        <Stack.Screen name="ServicePoster5" component={ServicePoster5}/>
        <Stack.Screen name="ServiceSeeker3" component={ServiceSeeker3}/>
        <Stack.Screen name="Search" component={Search}/>




      </Stack.Navigator>
    </NavigationContainer>
  );
}
