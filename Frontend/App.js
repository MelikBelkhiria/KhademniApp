import { NavigationContainer } from "@react-navigation/native";
import React,{useState} from "react";
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

import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';













const Stack = createNativeStackNavigator();


    export default function   App   ()  {
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name='Login' component= {Login}/>
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="ServicePoster" component={ServicePosterHome} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name='RegistrationScreen' component ={RegistrationScreen}/>
        
          <Stack.Screen name="Profileofseekerforseeker" component={Profileofseekerforseeker} />
          <Stack.Screen name='ProfileposterForseeker' component= {ProfileposterForseeker}/>
          <Stack.Screen name="ServicePoster3" component={ServicePoster3} />
          <Stack.Screen name='ServicePoster5' component= {ServicePoster5}/>
          <Stack.Screen name="ServiceSeeker3" component={ServiceSeeker3} />
          <Stack.Screen name='Search' component= {Search}/>
          <Stack.Screen name="Profileseekerforposter" component={Profileseekerforposter} />
          <Stack.Screen name='Profileposterforposter' component= {Profileposterforposter}/>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Application" component={Application} />
          <Stack.Screen name="DrawNavi" component={DrawNavi} />



        </Stack.Navigator>
        </NavigationContainer>
      );
    };
