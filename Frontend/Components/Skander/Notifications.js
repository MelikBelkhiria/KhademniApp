import React, { useState, useEffect,useCallback } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const Item = ({  title, message, date, type, navigation, service_id }) => {
  const handleNavigate = () => {
    if (type === "rating") {
      navigation.navigate("Rating", { service_id: service_id });
    }
  };

  return (
    <TouchableOpacity style={{ flex: 0.18, backgroundColor: "white", padding: 15, justifyContent: "space-between",borderBottomWidth:0.2,borderColor:"grey" }} onPress={handleNavigate}>
      <View style={{ flex: 0.5, marginTop: 5, justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", display: "flex", alignItems: "center", flex: 0.8 }}>
          <Text style={{ textAlignVertical: "center", marginLeft: 5, fontSize: 15, fontWeight: "bold" ,margin:10}}>{title}</Text>
        </View>
        <View style={{ width: 15, height: 15, backgroundColor: "green", borderRadius: 25 }}></View>
      </View>
      <Text style={{marginBottom:5}}>{message}</Text>
      <Text style={{ color: "#18C0C1" }}>{date}</Text>


    </TouchableOpacity>
  )
}
const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);

  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [urgentSelected, setUrgentSelected] = useState(false);

  const api = axios.create({
    baseURL: 'http://192.168.1.45:3001',
  });

  async function fetchData() {
    try {
      const token = await AsyncStorage.getItem('authToken');
      api.get('/notifications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

        .then((response) => response.data)
        .then((data) => {
          const formattedData = data.map((notification) => {
            return {
              id: notification.id,
              title: notification.title,
              message: notification.message,
              type: notification.type,
              date: new Date(notification.date).toLocaleString("en-US", { timeZone: "UTC" }),
              service_id: notification.service_id
            };
          });

          setNotifications(formattedData);
          console.log(formattedData)
          setFilteredNotifications(formattedData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          console.error(error.response.data);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );




  const handleUrgentPress = () => {
    setUrgentSelected(true);
    setFilteredNotifications(
      notifications.filter(notification => notification.type === "rating")
    );
  };

  const handleAllPress = () => {
    setUrgentSelected(false);
    setFilteredNotifications(notifications);
  };
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      message={item.message}
      date={item.date}
      type={item.type}
      navigation={navigation}
      service_id={item.service_id}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.15, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderBottomWidth: 0.2, borderBottomColor: "grey" }}>
        <View style={{ backgroundColor: "white", width: "90%", height: "50%", display: "flex", flexDirection: "row", borderRadius: 10, justifyContent: "center", alignItems: "center", paddingLeft: 5 }}>
          <Text style={{ backgroundColor: urgentSelected ? "#ACAEBE" : "white", width: "100%", height: "80%", textAlign: "center", textAlignVertical: "center", borderRadius: 10, color: urgentSelected ? "white" : "black", fontWeight: "bold" ,fontSize:30}} onPress={handleAllPress}>Notifications</Text>

        </View>
      </View>
      <View style={{ flex: 0.85, backgroundColor: "#F2F3F8" }}>
        <FlatList data={filteredNotifications} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </View>
    </View>
  );
};

export default Notifications;