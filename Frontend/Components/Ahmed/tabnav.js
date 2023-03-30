import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React,{useState} from "react";
import Confirmation from "../Melik/Confirmation";
import ServicePosterHome from "../Melik/ServicePosterHome";
import RegistrationScreen from "../Melik/src/views/screens/RegistrationsScreen";
import Login from "../Ahmed/LoginandHomeScreeen/login";
import Home from "../Ahmed/LoginandHomeScreeen/homescreen";
import ProfileposterForseeker from "./ProfileposterForseeker";
import Profileofseekerforseeker from "./profileofseekerforseeker";
import ServicePoster3 from "../Yosr/ServicePoster3";
import ServicePoster5 from "../Yosr/ServicePoster5";
import ServiceSeeker3 from "../Yosr/ServiceSeeker3";
import Search from "../Nour/Search";
import Profileseekerforposter from "./Profileseekerforposter";
import Profileposterforposter from "./profileposterforposter";
import SplashScreen from "../Skander/SplashScreen";
import Application from "../Skander/Application";
import Chat from "../Skander/Chat";
import Notifications from "../Skander/Notifications";
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';










const Tab = createBottomTabNavigator();






    export default function Tabnav () {
  return (
    
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#18C0C1",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: { height: 55 },
          
        }}
        
        initialRouteName="ServicePoster"
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false ,
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbox-outline"
                size={30}
                color={color}
                style={{ marginBottom: 8 }}

            
              />
            ),
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={Search} /*Search*/
          options={{
            headerShown: false ,
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="home-outline"
                size={30}
                color={color}
                style={{ marginTop: 8 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false ,
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="notifications-outline"
                size={30}
                color={color}
                style={{ marginBottom: 8 }}
              />
            ),
            headerTitleAlign: "center",
          }}
        />

        <Tab.Screen name="ServicePoster" component={ServicePosterHome}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }} />
        <Tab.Screen name="Confirmation" component={Confirmation}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }} />
        <Tab.Screen name="RegistrationScreen" component={RegistrationScreen}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarStyle: {
              display: "none",
            },
          }} />
        <Tab.Screen  name="Home" component={Home}    options={({ route }) => ({
    headerShown: false,
    tabBarButton: () => null,
    tabBarStyle: {
      display: "none",
    },

  })}/>
        <Tab.Screen           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
          name="profileofseekerforseeker"
          component={Profileofseekerforseeker}
        />
        <Tab.Screen           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
          name="profileposterForseeker"
          component={ProfileposterForseeker}
        />
        <Tab.Screen name="login" component={Login}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarStyle: {
              display: "none",
            },
          }} />
        <Tab.Screen name="ServicePoster3" component={ServicePoster3}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }} />
        <Tab.Screen name="ServicePoster5" component={ServicePoster5}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}/>
        <Tab.Screen name="ServiceSeeker3" component={ServiceSeeker3}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}/>
        <Tab.Screen name="Search" component={Search}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}/>
        <Tab.Screen
          name="profileseekerforposter"
          component={Profileseekerforposter}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="profileposterforposter"
          component={Profileposterforposter}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen name="splash" component={SplashScreen}            options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarStyle: {
              display: "none",
            },
          }}/>
        <Tab.Screen name="Application" component={Application}           options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}/>

      </Tab.Navigator>





   

    )}