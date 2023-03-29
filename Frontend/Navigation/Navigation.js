import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Chat from "../Components/Skander/Chat";
import Notifications from '../Components/Skander/Notifications';
import Application from '../Components/Skander/Application';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Application'
        screenOptions={{
          tabBarActiveTintColor: "#18C0C1",
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarStyle: { height: 55 },
        
        }}
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
          name="Home"
          component={HomeScreen}
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
            headerTitleAlign: "center"
          }}
        />
        <Tab.Screen
          name="Application"
          component={Application}
          options={{
            headerShown:false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
