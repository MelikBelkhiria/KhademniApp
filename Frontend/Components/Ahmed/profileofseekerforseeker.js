import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { openBrowserAsync } from 'expo-web-browser';
import 'react-native-gesture-handler';
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';

import { Pressable } from 'react-native';

import axios from 'axios';
import { useEffect, useState,useCallback } from 'react';
import Rating from '../../Utlity/Stars';
import jwtDecode from 'jwt-decode';




export default function Profileofseekerforseeker({navigation}) {
    const [follow, setfollow] = useState(false);
    const menuItemsToDisplay = [
        { name: 'service cuisson ', id: '1A', number: '4' },
        { name: 'cherche serveur', id: '2B', number: '5' },
        { name: 'service cuisson ', id: '3C', number: '5' },
        { name: 'cherche serveuse ', id: '4D', number: '5' },
        { name: 'service cuisson ', id: '5E', number: '4' },
        { name: 'cherche serveur', id: '6F', number: '4' },
        { name: 'service cuisson ', id: '7G', number: '4' },
        { name: 'cherche serveur', id: '8H', number: '3' },
    ];
    const [userInfo, setUserInfo] = useState()
    const [userType, setUserType] = useState(null);
    const [userRatings,setUserRatings]= useState()
  

    const api = axios.create({
      baseURL: 'http://192.168.1.45:3001'
    });
  
    async function fetchuserInfo() {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwtDecode(token);
    setUserType(decodedToken.userType);
      api.get('/userInfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {

          response.data
          setUserInfo(response.data)
        })
        .catch((error) => {
        });
  
    }
    async function fetchuserRatings() {
        const token = await AsyncStorage.getItem('authToken');
        const decodedToken = jwtDecode(token);
        try {
          const response = await axios.get('http://192.168.1.45:3001/api/get-rating', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const responseData = response.data; // Assign response data to a variable
          setUserRatings(responseData); // Pass response data to setUserRatings
        } catch (error) {
          console.log(error);
        }
      }
      
      
      
    useFocusEffect(
      useCallback(() => {
        fetchuserInfo()
        fetchuserRatings()
      }, [])
    );
  
    useEffect(() => {
      if (userRatings){
        console.log(userRatings);

      }
    }, [userRatings]);
    const Item = ({ name, number }) => (
        <View style={styles.containerflatlist} >
            <Text style={styles.textrating}>{name}</Text>
            <Ionicons style={styles.star} size={17} name="star">{number} </Ionicons>
            
        </View>);

    const renderItem = ({ item }) => <Item name={item.service_name} number={item.r} />;

const handleall =() =>{
    setfollow(!follow)
    navigation.navigate("ServiceSeeker3")

}

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <View style={styles.containerprofile}>
                   {userInfo && <Image style={styles.imageprofile} resizeMode="contain" source={{ uri: userInfo.profile_pic }} />}
                    <View>
                        {userInfo && userInfo.full_name && <Text style={styles.nomprofile}>{userInfo.full_name} </Text>}
                        <View style={styles.reviewcontainer}>
                            <Text style={styles.textrating}>Note globale :</Text>
                            {userInfo && userInfo.user_average && <Rating numberOfStars={userInfo.user_average}></Rating>}
                        </View>
                        <TouchableOpacity style={styles.follow} onPress={() => navigation.navigate("ServiceSeeker3")}>
                            <View style={styles.containerfollow}>
                                <Ionicons style={styles.iconfollow} size={25} name="create-outline"></Ionicons>

                                <Text style={styles.followtext}> Edit Profile </Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
            <View style={styles.bodycontainer}>

                <Text style={styles.titles}>
                    Description
                </Text>
                {userInfo && userInfo.description && <Text style={styles.description}>
                {userInfo.description}
                </Text>}
             
                <Text style={styles.titles}>
                Services terminés:
                </Text>
                <View style={styles.listratingcontainer}>
                    {userRatings && <FlatList data={userRatings}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}>

                    </FlatList>}

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    headercontainer: {
        flex: 0.25,
        flexDirection: 'row',
       
    },
    containerprofile: {
        flexDirection: 'row',
        marginTop: 20
    },
    containerfollow: {
        flexDirection: 'row',

    },
    bodycontainer: {
        flex: 0.66,
        marginTop: 60,
        marginLeft: 20
    },
    listratingcontainer: {
        flex: 1
    },
    containerflatlist: {
        flexDirection: 'row',
        alignItems:"center",
        marginBottom:10
        
    },
    goback:{
        marginTop:35,
        marginLeft:18
    },


    imageprofile: {
        width: 158,
        height: 154,
        borderRadius: 80,
        marginLeft:14,

    },
    nomprofile: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 26,
        marginTop: 10,
        marginBottom:10
    },
    textrating: {
        fontSize: 16,




    },
    follow: {
        backgroundColor: '#18C0C1',
        width: 150,
        alignItems: 'center',
        borderRadius: 8,
        padding: 6,
        marginTop: 20,
        marginLeft: 26


    },
    downloadcv: {
        backgroundColor: '#18C0C1',
        width: 150,
        alignItems: 'center',
        borderRadius: 8,
        padding: 6,
        marginTop: 5,
        marginBottom: 16
    },
    followtext: {
        fontSize: 16,
        color: 'white',
        padding: 2,
        paddingLeft: 7

    },
    iconfollow: {
        color: 'white',

    },
    reviewcontainer: {
        flexDirection: 'column',
        alignItems:"center",

    },
    star: {
        paddingLeft: 12,

        color: '#D5AB55'
    },
    numberating: {
        fontSize: 16,
        paddingLeft: 3,
        marginTop: 10,
        fontWeight: 'bold',
    },
    titles: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 4,
        color: '#0e7676'
    },
    description: {
        paddingBottom: 18
    }
})