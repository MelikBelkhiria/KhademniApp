import {React, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default function ConfirmCard(props) {



  const handleReject = (id) => {
  props.onReject(id);
  }

  const handleConfirm = (id) => {
  props.onReject(id);
  props.onConfirm(id);
  }
 
  return (

    <TouchableOpacity style={styles.container} >

      <View style={styles.card}>
      <View style={{flexDirection:'row'}}> 
      
      <View style={{marginRight:15}}>
      <Image source={{ uri: props.uri }} style={styles.pdp} />
      <Image source={require('./stars.png')} style={{marginTop:10}} />
      </View>


      <View>
      <Text style={styles.text}>{props.name}</Text>


        <View style={styles.row1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{flexDirection:'row', alignItems:'center',marginBottom:10}}>
            <Image
              source={{
                uri:
                  'https://th.bing.com/th/id/R.e77d20cb58ee8b548e923dcd238545ef?rik=QuUECdQ9vsx5UA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_319799.png&ehk=jT8hIamvS2E%2bgBMjPv5E9AD9RTNHgcZw4%2fILW8S6xlk%3d&risl=&pid=ImgRaw&r=0',
              }}
              style={styles.image}
            />
            <Text style={styles.location}>{props.Location}</Text>
            </View>
            <View style={styles.buttons}>
            <TouchableOpacity onPress={()=> handleConfirm(props.id)}>
                    <Image source={require('./checked.png')} style={styles.confirm} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleReject(props.id)}>
                    <Image source={require('./cancel.png')} style={styles.cancel}/>
            </TouchableOpacity>
             </View>
          </View>


        </View>
        <View style={styles.row2}>
        <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/city-elements-16/66/37-512.png' }} style={styles.image} />
          <Text style={[styles.location]}>{props.Date}</Text>
        </View>

        </View>
      </View>
      </View>
    </TouchableOpacity>
   

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    width: 350,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 11,
  },
  statutText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  yellowBackground: {
    backgroundColor: 'yellow',
  },
  greenBackground: {
    backgroundColor: '#5EEA85',
  },
  image: {
    width: 25,
    height: 25,
  },
  confirm:{
    marginLeft:80,
    width:35,
    height:35,
  },

  cancel:{
    marginLeft:10,
    width:35,
    height:35,
  },

  pdp:{
    width:70,
    height:70,
    borderRadius: 50,
    alignSelf:'center',
  },

  buttons:{
    flexDirection:'row',
    position:'absolute',
    marginLeft:60,
  }

  
});
