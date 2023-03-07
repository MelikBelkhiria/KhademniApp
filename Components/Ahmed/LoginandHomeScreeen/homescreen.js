import { View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
export default function Home() {
return (
<View style={styles.container}>
<ImageBackground style={styles.bg} source={{uri: 'https://www.transparenttextures.com/patterns/back-pattern.png'}}>
<View style={styles.titre}>
<Text style={styles.texttitre}> Khademni</Text>
</View>
<View style={styles.imagecontainer}>
<Image style={styles.image} source={require('../LoginandHomeScreeen/digital-marketing.png')} />
</View>
<Text style={styles.jobopp}>Opportunite des services</Text>
<Text style={styles.fact}> Besoins d'argent supplémentaires ? Notre Alicqtion facilite la recherche d'un emploi temporaire.</Text>
<TouchableOpacity style={styles.login} onPress={() => { }}>
<Text style={styles.logintext}>Se connecter</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.signup} onPress={() => { }}>
<Text style={styles.signuptext}>creer un compte</Text>
</TouchableOpacity>
</ImageBackground>
</View>
)
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
bg: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#18C0C1',
},
texttitre:{
fontSize:16,
color:'#fff',
},
titre:{
flex: 0.55,
marginRight: 280,
},
jobopp:{
fontSize:24,
fontWeight:'bold',
marginRight:128,
color:'#fff',
},
fact:{
fontSize:15,
color:'#fff',
marginLeft:17,
margin:10,
},
image: {
width: 320,
height: 250,
},
imagecontainer:{
alignItems:'center',
marginTop: 6,
marginBottom: 44,
},
login: {
backgroundColor: '#fff',
width: 150,
alignItems: 'center',
borderRadius: 10,
padding: 10,
marginTop: 70,
},
logintext: {
alignItems: 'center',
textAlign: 'center',
fontSize: 18,
color: '#18C0C1',
},
signuptext:{
alignItems: 'center',
textAlign: 'center',
fontSize: 18,
color: '#fff',
borderColor:'#18C0C1',
},
signup:{
backgroundColor: '#073e3e',
width: 150,
alignItems: 'center',
borderRadius: 10,
padding: 10,
marginTop: 20,
}
})