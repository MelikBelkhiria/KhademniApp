import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
const Item = ({ pic, title, message, date }) => {
  return (
    <View style={{ flex: 0.18, backgroundColor: "white", padding: 15, justifyContent: "space-between" }}>
      <View style={{ flex: 0.5, marginTop: 5, justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", display: "flex", alignItems: "center", flex: 0.8 }}>
          <Image style={{ borderRadius: 25, width: 50, height: 50 }} source={{ uri: pic }}></Image>
          <Text style={{ textAlignVertical: "center", marginLeft: 10, fontSize: 15, fontWeight: "bold" }}>{title}</Text>
        </View>
        <View style={{ width: 15, height: 15, backgroundColor: "green", borderRadius: 25 }}></View>
      </View>
      <Text>{message}</Text>
      <Text style={{ color: "#5FC6B7" }}>{date}</Text>


    </View>
  )
}
const Notifications = () => {
  const messages = [{ id: 1, pic: "https://img.freepik.com/free-photo/portrait-young-woman-with-beautiful-smile-pretty-gorgeous-girl-with-long-light-straight-hairs-brown-make-up-face-fashion-model-blue-eyes-posing_186202-8416.jpg?w=2000", title: "Jardinage", message: "Posté by Salma Delana", date: "28.10.2023 04:58",type:"follow" },
  { id: 2, pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eo_circle_red_letter-r.svg/2048px-Eo_circle_red_letter-r.svg.png", title: "Votre candidature pour cours de Piano a été rejetée !", message: "", date: "28.10.2022 04:58",type:"rejection" },
  { id: 3, pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDVDWso_P2mOVeonGw2W0Qfv56CqWKzN63DFLhZyenw&s", title: "Your candidature pour Babysitting a été acceptée !", message: "", date: "28.10.2022 04:58",type:"accepted" },
  { id: 4, pic: "https://www.themoviedb.org/t/p/original/iWdKjMry5Pt7vmxU7bmOQsIUyHa.jpg", title: "Vous avez terminé Etudes !", message: "Signalez votre achèvement et donnez votre avis", date: "28.10.2022 04:58",type:"completion" },
  { id: 5, pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eo_circle_red_letter-r.svg/2048px-Eo_circle_red_letter-r.svg.png", title: "Votre candidature pour Barman a été rejetée !", message: "", date: "28.10.2022 04:58",type:"rejection" },

  ];
  const [filteredMessages, setFilteredMessages] = useState(messages);
  const [urgentSelected, setUrgentSelected] = useState(false);

  const handleUrgentPress = () => {
    setUrgentSelected(true);
    setFilteredMessages(
      messages.filter(
        (item) =>
          item.type === "rejection" || item.type === "accepted" || item.type === "feedback"
      )
    );
  };

  const handleAllPress = () => {
    setUrgentSelected(false);
    setFilteredMessages(messages);
  };

  const renderItem = ({ item }) => (
    <Item pic={item.pic} title={item.title} message={item.message} date={item.date} />
  );
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 0.15, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderBottomWidth: 0.2, borderBottomColor: "grey" }}>
    <View style={{ backgroundColor: "#F2F3F8", width: "90%", height: "50%", display: "flex", flexDirection: "row", borderRadius: 10, justifyContent: "center", alignItems: "center", paddingLeft: 5 }}>
    <Text style={{ backgroundColor: urgentSelected ? "#ACAEBE" : "white", width: "50%", height: "80%", textAlign: "center", textAlignVertical: "center", borderRadius: 10, color: urgentSelected ? "white" : "black", fontWeight: "bold" }} onPress={handleAllPress}>Tout</Text>
    <Text style={{ backgroundColor:! urgentSelected ? "#ACAEBE" : "white", width: "50%", height: "80%", textAlign: "center", textAlignVertical: "center", borderRadius: 10, color: !urgentSelected ? "white" : "black", fontWeight: "bold" }} onPress={handleUrgentPress}>Urgent</Text>

    </View>
    </View>
    <View style={{ flex: 0.85, backgroundColor: "#F2F3F8" }}>
    <FlatList data={filteredMessages} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
    </View>
    );
};

export default Notifications;