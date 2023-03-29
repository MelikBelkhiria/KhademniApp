import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React,{useState} from "react";
import Confirmation from "./Components/Melik/Confirmation";
import ServicePosterHome from "./Components/Melik/ServicePosterHome";
import RegistrationScreen from "./Components/Melik/src/views/screens/RegistrationsScreen";
import Navigation from "./Navigation/Navigation";
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
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';





const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



    export default function App() {

      return (
        
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login" >
            <Drawer.Screen name="profile" component={Profileofseekerforseeker} />
            <Drawer.Screen name="home" component={Search} />
          </Drawer.Navigator>
          </NavigationContainer>



)}

const TabNavigator =()  =>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#18C0C1",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: { height: 55 },
        }}
        initialRouteName="splash"
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
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
      </NavigationContainer>




   

    )}

    const RootNavigator = () => {
      return (
        <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name='Login' component= {Login}/>
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="ServicePosterHome" component={ServicePosterHome} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name='RegistrationScreen' component ={RegistrationScreen}/>
          <Stack.Screen name='Home' component= {Home}/>
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

        </Stack.Navigator>
        </NavigationContainer>
      );
    };

