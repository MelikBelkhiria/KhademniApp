import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Profileseekerforposter() {
    const [follow, setfollow] = useState(false);
    const menuItemsToDisplay = [
        { name: 'service cuisson ', id: '1A', number: '4' },
        { name: 'cherche serveur', id: '2B', number: '3' },
        { name: 'service cuisson ', id: '3C', number: '5' },
        { name: 'cherche serveuse ', id: '4D', number: '5' },
        { name: 'service cuisson ', id: '5E', number: '2' },
        { name: 'cherche serveur', id: '6F', number: '4' },
        { name: 'service cuisson ', id: '7G', number: '4' },
        { name: 'cherche serveur', id: '8H', number: '3' },
    ];

    const Item = ({ name, number }) => (
        <View style={styles.containerflatlist} >
            <Text style={styles.textrating}>{name}</Text>
            <Ionicons  style={styles.star} size={17} name="star"> </Ionicons>
            <Text style={styles.numberating} >{number}</Text>
        </View>);

const renderItem = ({ item }) => <Item name={item.name} number={item.number} />;


    return (
        <View style={styles.container}>
                <Ionicons style={styles.goback} name="arrow-back-outline" size={30}></Ionicons>
            <View style={styles.headercontainer}>
                <View style={styles.containerprofile}>
                    <Image style={styles.imageprofile}  resizeMode="contain" source={require("./257343671_446285320177426_6925597833109609576_n-e1640194834882.jpg")} />
                    <View>
                        <Text style={styles.nomprofile}>Molka Ghariani </Text>
                        <View style={styles.reviewcontainer}>
                            <Text style={styles.textrating}>Note globale :</Text>
                            <Ionicons style={styles.star} size={17} name="star"></Ionicons>
                            <Text style={styles.numberating}> 5</Text>
                        </View>
                        <TouchableOpacity style={styles.follow} onPress={() => { setfollow(!follow) }}>
                            <View style={styles.containerfollow}>
                                {follow ? (<Ionicons style={styles.iconfollow} size={25} name="checkmark-circle-outline"></Ionicons>) : (<Ionicons style={styles.iconfollow} size={25} name="add-circle-outline"></Ionicons>)}

                                {follow ? (<Text style={styles.followtext}> Following </Text>) : (<Text style={styles.followtext}> Follow </Text>)}
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
            <View style={styles.bodycontainer}>
                <Text style={styles.titles}>
                    Localisation
                </Text>
                <Text style={styles.description}>
                    Tunis,Bardo 2
                </Text>
                <Text style={styles.titles}>
                    Description
                </Text>
                <Text style={styles.description}>
                    Molka Ghariani , j'ai 2 restaurants a tunis e genralements j'ai besoin d'un aide a servir quelque weekends generalement et  J'aimerais que mes employés soient ponctuels, respectueux et fiables.
                </Text>
                <Text style={styles.titles}>
                    Offres d'emploi qui ont été publiées
                </Text>
                <View style={styles.listratingcontainer}>
                    <FlatList data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        >

                    </FlatList>

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
        marginRight: 20,
        marginTop: 8
    },
    containerprofile: {
        flexDirection: 'row',
        marginTop: 20,

    },

    containerfollow: {
        flexDirection: 'row',

    },
    bodycontainer: {
        flex:0.5,
        marginTop: 60,
        marginLeft: 20
    },
    listratingcontainer: {
        flex: 1
    },
    containerflatlist:{
        flexDirection:'row'
    },
    goback:{
        marginTop:35,
        marginLeft:18
    },

    
    imageprofile: {
        width: 158,
        height: 154,
        borderRadius: 80,
        marginLeft:8

    },
    nomprofile: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 20,
        marginTop: 10
    },
    textrating: {
        fontSize: 16,
        paddingLeft: 20,
        marginTop: 10,


    },
    follow: {
        backgroundColor: '#18C0C1',
        width: 150,
        alignItems: 'center',
        borderRadius: 8,
        padding: 6,
        marginTop: 20,
        marginLeft: 20


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
        flexDirection: 'row'
    },
    star: {
        paddingLeft: 12,
        marginTop: 12,
        color: '#D5AB55'
    },
    numberating: {
        fontSize: 16,
        paddingLeft: 3,
        marginTop: 10,
        fontWeight: 'bold',
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 4,
        color:'#0e7676'
    },
    description: {
        paddingBottom: 18,
        fontSize:16
    }
})