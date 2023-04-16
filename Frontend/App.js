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
import { createDrawerNavigator } from "@react-navigation/drawer";
import Rating from "./Components/Skander/Rating"



import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Components/Ahmed/LoginandHomeScreeen/homescreen";












const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="screenhome" component={HomeScreen} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        <RootStack.Screen name="DrawNavi" component={DrawNavi} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}