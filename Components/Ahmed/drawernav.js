import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet,View,Image } from 'react-native';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
DrawerContentScrollView,
DrawerItemList,
} from '@react-navigation/drawer';

import { Pressable } from 'react-native';
import Home from './LoginandHomeScreeen/homescreen';
import Profileofseekerforseeker from './profileofseekerforseeker';
import tabnav from './tabnav';
import JobSearchPage from '../Nour/Search';
import Help from './help';
import JobCard from './savedpost';



const Drawer = createDrawerNavigator();
export default function DrawNavi({navigation,}) {

const CustomDrawer=(props)=>{
return(
<View style={{flex:1, marginTop:20}}>
<DrawerContentScrollView {...props} style={{marginTop:30 }}>
<Image style={{width:130,height:130,borderRadius:70,alignSelf:"center",marginBottom:10}} source={require("./IMG_1368-Modifica_pp-1.jpg")}></Image>
<Text style={{alignSelf:"center", marginBottom:30}}> Hello Salima
</Text>
<DrawerItemList {...props}>
</DrawerItemList>
<Pressable  style={[styles.button, styles.buttonClose]}
onPress={
()=>{ navigation.navigate("Login")}}>
<Text  style={styles.textStyle} >
Log Out
</Text>
</Pressable>
</DrawerContentScrollView>
</View>
)
}
return (
    
<Drawer.Navigator useLegacyImplementation
drawerContent={props=> <CustomDrawer{...props} />}
drawerLabelStyle={{marginLeft:-25}}
screenOptions={({ route }) => ({
drawerIcon: ({ focused, color, size }) => {
let iconName;
if (route.name === 'Home') {
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
drawerLabelStyle:{marginLeft:-20},
drawerActiveTintColor: '#18C0C1',
drawerInactiveTintColor: 'gray',
})}
>

<Drawer.Screen name="Home" component={tabnav} options={{headerTitle:" Khaddemni",headerTitleStyle:{fontSize:33},headerStyle:
{
backgroundColor: 'white',
} }} />
<Drawer.Screen name="Profile" component={Profileofseekerforseeker} options={{headerTitle:" Profile",headerTitleStyle:{fontSize:33},headerStyle:
{
backgroundColor: 'white',
} }} />
<Drawer.Screen name="Help&Support" component={Help} options={{headerTitle:" Help & Support",headerTitleStyle:{fontSize:33},headerStyle:
{
backgroundColor: 'white',
} }} />
<Drawer.Screen name="saved" component={JobCard} options={{headerTitle:" SavedPost",headerTitleStyle:{fontSize:33},headerStyle:
{
backgroundColor: 'white',
} }} />

</Drawer.Navigator>
)
}


const styles=StyleSheet.create({
    button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:250,
    flex:1,
    marginHorizontal:10,
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
    