import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Image } from 'react-native';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';

import { Pressable } from 'react-native';
import Home from './LoginandHomeScreeen/homescreen';
import Profileofseekerforseeker from './profileofseekerforseeker';
import Tabnav from './tabnav';
import JobSearchPage from '../Nour/Search';
import Help from './help';
import JobCard from './savedpost';
import axios from 'axios';
import { useEffect, useState,useCallback } from 'react';
import { Buffer } from 'buffer';
import base64js from 'base64-js';
function base64Encode(data, type = "") {
  const base64 = Buffer.from(data, type).toString('base64');
  return base64;
}


const Drawer = createDrawerNavigator();
export default function DrawNavi({ navigation, }) {


  const CustomDrawer = (props) => {
    const [userInfo, setUserInfo] = useState()

    const api = axios.create({
      baseURL: 'http://192.168.1.45:3001'
    });
  
    async function fetchuserInfo() {
      const token = await AsyncStorage.getItem('authToken');
      api.get('/userInfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          response.data
          console.log(response.data)
          setUserInfo(response.data)
        })
        .catch((error) => {
        });
  
    }
  
    useFocusEffect(
      useCallback(() => {
        fetchuserInfo();
      }, [])
    );
  
  
  

    const handleLogOut = async () => {
      try {
        // Clear the JWT token from AsyncStorage
        await AsyncStorage.removeItem('authToken');

        // Navigate to the login screen or any other screen that requires authentication
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth', screen: 'Login' }],
        });
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.47, backgroundColor: '#38c0c0', marginBottom: 10, borderBottomLeftRadius: 22, borderBottomRightRadius: 22, justifyContent: "center", alignItems: "center" }}>
          {userInfo && <Image style={{ width: 150, height: 150 }} source={{ uri: userInfo.profile_pic }} />}


          {userInfo && userInfo.full_name && <Text style={{ alignSelf: "center", fontSize: 20, color: 'white' }}> Hello {userInfo.full_name}
          </Text>}
        </View>
        <DrawerContentScrollView {...props} >
          <DrawerItemList {...props}>
          </DrawerItemList>
          <Pressable style={[styles.button, styles.buttonClose]}
            onPress={handleLogOut}>
            <Text style={styles.textStyle} >
              Log Out
            </Text>
          </Pressable>
        </DrawerContentScrollView>
      </View>
    )
  }
  return (

    <Drawer.Navigator useLegacyImplementation
      drawerContent={props => <CustomDrawer{...props} />}
      drawerLabelStyle={{ marginLeft: -25 }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Tabnav') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Help&Support') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }
          if (route.name === 'Profile') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          }
          if (route.name === 'saved') {
            iconName = focused
              ? 'bookmark'
              : 'bookmark';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerLabelStyle: { marginLeft: -20 },
        drawerActiveTintColor: '#18C0C1',
        drawerInactiveTintColor: 'gray',
      })}
    >

      <Drawer.Screen name="Tabnav" component={Tabnav} options={{
        headerTitle: " Khaddemni", headerTitleStyle: { fontSize: 33 }, headerStyle:
        {
          backgroundColor: 'white',
        }
      }} />
      <Drawer.Screen name="Profile" component={Profileofseekerforseeker} options={{
        headerTitle: " Profile", headerTitleStyle: { fontSize: 33 }, headerStyle:
        {
          backgroundColor: 'white',
        }
      }} />
      <Drawer.Screen name="Help&Support" component={Help} options={{
        headerTitle: " Help & Support", headerTitleStyle: { fontSize: 33 }, headerStyle:
        {
          backgroundColor: 'white',
        }
      }} />
      <Drawer.Screen name="saved" component={JobCard} options={{
        headerTitle: " SavedPost", headerTitleStyle: { fontSize: 33 }, headerStyle:
        {
          backgroundColor: 'white',
        }
      }} />

    </Drawer.Navigator>
  )
}


const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 250,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: "#18C0C1",
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
})
