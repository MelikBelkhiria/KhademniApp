import { React, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Rating from "../../Utlity/Stars"
import axios from 'axios'

const Application = ({navigation, route}) => {

const { title, price, imageURI, numberOfStars, description, created_at, employer, location, field, serviceId } = route.params;


  const [showMore, setShowMore] = useState(false);

  const handleApplication = async (e) =>{
    e.preventDefault();
    try{
      await axios.post("http://192.168.3.14:3001/ApplyForTask/" + serviceId ,{ withCredentials: true })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.25, justifyContent: "space-around", flexDirection: "row", backgroundColor: "white", alignItems: "center", marginTop: 20 }}>
        <View style={{ flexDirection: "column" }}>
          <Image style={{ marginBottom: 5, borderRadius: 50, width: 90, height: 90 }} source={{ uri:imageURI }}></Image>
          <Rating numberOfStars={numberOfStars}></Rating>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{title}</Text>
          <View style={{ height: 10 }}></View>
          <Text style={{ fontStyle: "italic" }}>Posté par {employer}</Text>
        </View>
      </View>
      <View style={{ height: 10 }}></View>
      <View style={{ flex: 0.22, backgroundColor: "white", flexDirection: "column", flexWrap: "wrap", padding: 20 }}>
        <View style={{ marginBottom: 30, marginRight: 50 }}>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>Posté le</Text>
          <Text>{created_at}</Text>
        </View>
        <View style={{ marginRight: 50 }}>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>Prix</Text>
          <Text>{price}TND</Text>
        </View>
        <View style={{ marginBottom: 30, width: 100 }}>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>DOMAINE</Text>
          <Text style={{ textAlign: "center", backgroundColor: "#D9DCE1", borderRadius: 20, width: "100%" }}>{field}</Text>
        </View>
        <View>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>ADDRESSE</Text>
          <Text>{location}</Text>
        </View>

      </View>
      <View style={{ height: 10 }}></View>
      <View style={{ flex: 0.3, backgroundColor: "white", padding: 20 }}>
        <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 10 }}>DESCRIPTION DU SERVICE</Text>
        {showMore ? ( 
          <>
            <ScrollView>
              <Text style={{ fontSize: 16, lineHeight: 24 }}>
                {description}
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={() => setShowMore(false)}>
              <Text style={{ color: "blue", marginTop: 10, fontWeight: "bold" }}>Voir moins ↑</Text>
            </TouchableOpacity>
          </>
        ) : ( 
          <>
            <Text style={{ fontSize: 16, lineHeight: 24 }}>
              {description}
            </Text>
            <TouchableOpacity onPress={() => setShowMore(true)}>
              <Text style={{ color: "blue", marginTop: 10, fontWeight: "bold" }}>Voir plus ↓</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}>
      <Pressable onPress={(e)=>{
        handleApplication(e);
        navigation.navigate("Search")}}>
        <Text style={{backgroundColor:"#18C0C1",width:170,height:"60%",textAlign:"center",textAlignVertical:"center",fontWeight:"bold",color:"white",borderRadius:10,marginTop:20}}>Poser candidature</Text>
      </Pressable>
      </View>



    </View>
  );
};

export default Application;