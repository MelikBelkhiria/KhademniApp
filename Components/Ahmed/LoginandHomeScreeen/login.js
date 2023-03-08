import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Linking } from 'react-native';



export default function Login({navigation}) {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeAreaView style={{backgroundColor:"white",height:"100%"}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"}>
                <ScrollView keyboardDismissMode='on-drag' >

                    <View style={styles.headercontainer}>
                        <Text style={styles.textheader}> Bienvenue</Text>
                    </View>

                    <Image style={styles.image} source={require('./mobile-login-concept-.webp')} />

                    <View style={styles.bodycontainer}>
                        <Ionicons style={styles.emailicon} name='mail-outline' size={30} />
                        <TextInput
                            value={email}
                            style={styles.input}
                            placeholder={'Your Email'}
                            onChangeText={onChangeEmail}
                            clearButtonMode={'always'}
                            keyboardType={'email-address'}
                            textContentType={'emailAddress'}
                        />
                    </View>

                    <View style={styles.bodycontainer}>

                        <Ionicons style={styles.emailicon} name='lock-closed-outline' size={30} />
                        <TextInput
                            value={password}
                            style={styles.input}
                            placeholder={'Your password'}
                            onChangeText={onChangePassword}
                            clearButtonMode={'always'}
                            secureTextEntry={true}
                            textContentType={'password'}
                        />

                    </View>

                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.forgotpassword}> Mot de passe oublier  </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.login} onPress={() => {navigation.navigate("Search") }}>
                        <Text style={styles.logintext}>Se connecter</Text>
                    </TouchableOpacity>

                    <View style={styles.addtext}>
                        <Text style={styles.text}> ou bien se connecter avec...</Text>
                    </View>

                    <View style={styles.loginwith}>
                        <TouchableOpacity style={styles.loginwithfacebook} onPress={() => {  Linking.openURL('https://www.google.com');
 }}>
                            <Image source={require('./icons8-logo-google-48.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginwith} onPress={() => {  Linking.openURL('https://www.facebook.com');
 }}>
                            <Image source={require('./icons8-facebook-48.png')} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    keyboard:{
        flex:1
    },
    containerimage:{
     marginBottom:10
    },
    text:{
        fontSize:18
    },


    loginwith: {
        flexDirection: 'row',
        justifyContent: 'center'


    },
    addtext: {
        alignItems: 'center',

        marginTop: 17,
        marginBottom:19
    },
    logogoogle: {
        color: 'red'
    },
    logofacebook: {
        color: 'blue'
    },
    emailicon: {

        marginLeft: 66,
        marginTop: 10,
        color: 'green',
        marginLeft: 16
    },
    forgotpassword: {
        color: 'blue',
        marginLeft: 212,
        fontSize:16
    },
    login: {
        backgroundColor: '#18C0C1',
        width: 150,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginLeft: 120
    },
    image: {
        width: 270,
        height: 190,
        alignItems: 'center',
        marginLeft: 60,
        marginBottom:40

    },



    input: {
        color: 'black',
        bordercolor: 'grey',
        borderRadius: 8,
        backgroundColor: 'rgb(232, 253, 247)',
        width: 300,
        padding: 10,
        margin: 5,
        display: 'flex',
        height: 50,
        marginRight: 100,


    },
    headercontainer: {
        marginBottom: 50,
        padding: 10,
        alignItems: 'center',
        width: 380,
        

    },
    bodycontainer: {

        flexDirection: 'row',
        marginLeft:4

    },
    textheader: {
        fontSize: 40,
        color: '#18C0C1',
        flexWrap: 'wrap',
        marginTop:50,
        fontWeight:'bold'


    },
    logintext: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight:'bold'
    },

})