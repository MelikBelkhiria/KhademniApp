import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Confirmation from "./Components/Melik/Confirmation";
import ServicePosterHome from "./Components/Melik/ServicePosterHome";
import RegistrationScreen from "./Components/Melik/src/views/screens/RegistrationsScreen";

import Login from "./Components/Ahmed/LoginandHomeScreeen/login";
import Home from "./Components/Ahmed/LoginandHomeScreeen/homescreen";
import ProfileposterForseeker from "./Components/Ahmed/ProfileposterForseeker";
import Profileofseekerforseeker from "./Components/Ahmed/profileofseekerforseeker";
import ServicePoster3 from "./Components/Yosr/ServicePoster3";
import ServicePoster5 from "./Components/Yosr/ServicePoster5";
import ServiceSeeker3 from "./Components/Yosr/ServiceSeeker3";
import Search from "./Components/Nour/Search";
import Profileseekerforposter from "./Components/Ahmed/Profileseekerforposter";
import Profileposterforposter from "./Components/Ahmed/profileposterforposter";
import SplashScreen from "./Components/Skander/SplashScreen";
import Application from "./Components/Skander/Application";
import Chat from "./Components/Skander/Chat";
import Notifications from "./Components/Skander/Notifications";
import DrawNavi from "./Components/Ahmed/drawernav";
import Tabnav from './Components/Ahmed/tabnav';


import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Components/Ahmed/LoginandHomeScreeen/homescreen";













const Stack = createNativeStackNavigator();


export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashsplash"

        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="splashsplash" component={SplashScreen}></Stack.Screen>
      <Stack.Screen name="screenhome" component={HomeScreen} />
      <Stack.Screen name="Tabnav" component={Tabnav} />
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer >
  );
};
