import { React, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Rating from "../../Utlity/Stars"
const Application = () => {
  const [showMore, setShowMore] = useState(false);


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.25, justifyContent: "space-around", flexDirection: "row", backgroundColor: "white", alignItems: "center", marginTop: 20 }}>
        <View style={{ flexDirection: "column" }}>
          <Image style={{ marginBottom: 5, borderRadius: 50, width: 90, height: 90 }} source={{ uri: "https://www.themoviedb.org/t/p/original/iWdKjMry5Pt7vmxU7bmOQsIUyHa.jpg " }}></Image>
          <Rating numberOfStars={4}></Rating>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Kahweji</Text>
          <View style={{ height: 10 }}></View>
          <Text style={{ fontStyle: "italic" }}>Postée le 20 Janvier</Text>
        </View>
      </View>
      <View style={{ height: 10 }}></View>
      <View style={{ flex: 0.22, backgroundColor: "white", flexDirection: "column", flexWrap: "wrap", padding: 20 }}>
        <View style={{ marginBottom: 30, marginRight: 50 }}>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>POSTULER AVANT</Text>
          <Text>30 Juillet 2021</Text>
        </View>
        <View style={{ marginRight: 50 }}>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>Salaire</Text>
          <Text>100 dt</Text>
        </View>
        <View style={{ marginBottom: 30, width: 100 }}>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>DOMAINE</Text>
          <Text style={{ textAlign: "center", backgroundColor: "#D9DCE1", borderRadius: 20, width: "60%" }}>Café</Text>
        </View>
        <View>
          <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 5 }}>ADDRESSE</Text>
          <Text>Ariana</Text>
        </View>

      </View>
      <View style={{ height: 10 }}></View>
      <View style={{ flex: 0.3, backgroundColor: "white", padding: 20 }}>
        <Text style={{ color: "grey", fontWeight: "bold", marginBottom: 10 }}>DESCRIPTION DU SERVICE</Text>
        {showMore ? ( 
          <>
            <ScrollView>
              <Text style={{ fontSize: 16, lineHeight: 24 }}>
                Je suis à la recherche d'une personne pour tenir mon café pendant une journée.
                Je cherche quelqu'un qui a un peu d'expérience dans le domaine et qui est également sociable et sympathique.
                En effet, j'ai besoin d'un remplaçant pour mon employé qui est malade, et le travail ne dure qu'une seule journée.
                Si vous êtes intéressé et que vous pensez correspondre à ces critères, n'hésitez pas à me contacter.
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={() => setShowMore(false)}>
              <Text style={{ color: "blue", marginTop: 10, fontWeight: "bold" }}>Voir moins ↑</Text>
            </TouchableOpacity>
          </>
        ) : ( 
          <>
            <Text style={{ fontSize: 16, lineHeight: 24 }}>
              Je suis à la recherche d'une personne pour tenir mon café pendant une journée.
              Je cherche quelqu'un qui a un peu d'expérience dans le domaine et qui est également sociable et sympathique.
            </Text>
            <TouchableOpacity onPress={() => setShowMore(true)}>
              <Text style={{ color: "blue", marginTop: 10, fontWeight: "bold" }}>Voir plus ↓</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}>
      <Pressable>
        <Text style={{backgroundColor:"#18C0C1",width:170,height:"60%",textAlign:"center",textAlignVertical:"center",fontWeight:"bold",color:"white",borderRadius:10,marginTop:20}}>Poser candidature</Text>
      </Pressable>
      </View>



    </View>
  );
};

export default Application;