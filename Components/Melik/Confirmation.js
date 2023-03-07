import {React, useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownLocation from './DropDownLocation'
import DropDownTime from './DropDownTime';
import DropDownRating from './DropDownRating copy';
import ConfirmCard from './ConfirmCard'




export default function Confirmation({ route }) {
  const { Title, Statut, Date, uri, onConfirm } = route.params;

  const [candidates, setCondidates]= useState([{id:0,fullName: 'Maria Ben Moulehem', Location: 'Tunis', Date:'14/02/2023', uri: 'https://th.bing.com/th/id/OIP.VNkoI19GPy5Cm9MTlFHO8wAAAA?pid=ImgDet&rs=1'},
  {id:1, fullName: 'Salima Ben Yedder', Location: 'Sousse', Date:'10/02/2023', uri:'https://th.bing.com/th/id/OIP.9sj4_jr5ogcNLp41F4n7OwHaLH?pid=ImgDet&rs=1'}]) 

  

  const onReject = (id) => {
     setCondidates(candidates.filter((item) => item.id !== id ))
  }


 


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{Title}</Text>
        </View>
        {uri && <Image style={styles.image} source={{ uri }} />}
      </View>

    <View style={styles.filterContainer}>

      <View  style={{marginLeft: 30}}>
      <DropDownLocation/>
      </View>

      <View  style={{marginLeft: 30}}>
      <DropDownTime/>
      </View>

      <View style={{marginLeft: 30, marginRight: 30}}>
      <DropDownRating/>
      </View>

    </View>


    {candidates.map((service, index) => (
        <ConfirmCard key={index} name={service.fullName} Location={service.Location} Date={service.Date} uri={service.uri} id={service.id} onReject={onReject} onConfirm={onConfirm}/>
      ))}
      
      
      <View style={styles.content}>
        {/* Your confirmation content */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:30
  },

  filterContainer:{
    flexDirection:'row',
  },

  statut: {
    fontSize: 11,
    marginLeft: 30,
    fontWeight:'bold',
    marginTop:10
  },
  statutText: {
    paddingHorizontal: 5, // Change this value to adjust the padding
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold',
    backgroundColor:'yellow',
    width:69
  },
  image: {
    width:80,
    height: 80,
    borderRadius: 40,
    marginRight:50
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
