// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   Image,
//   TouchableOpacity,
// }
// from "react-native";

// export default function ServicePoster3() {
//   const [Name, setname] = useState("");
//   const [location, setlocation] = useState("");
//   const [Description, setDescription] = useState("");

//   return (
//     <View style={styles.container}>
//         <Image style={styles.image} source={require("../Yosr/imageee.png")} />

//       <StatusBar style="auto" />
//       <Text > Name: </Text>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Input Name "
//           placeholderTextColor="#003f5c"
//           onChangeText={(Name) => setname(Name)}
//         />
//       </View>
//       <Text > Location: </Text>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Original Location coordinates should be here "
//           placeholderTextColor="#003f5c"

//           onChangeText={(location) => setlocation(location)}
//         />
//       </View>

//       <Text  style={ {marginBottom:50}}> Description: </Text>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.TextInput}
//           placeholder="Original description should be here "
//           placeholderTextColor="#003f5c"
//           onChangeText={(Description) => setDescription(Description)}
//         />
//       </View>
//       <View>
//       <TouchableOpacity style={styles.SaveBtn}>
//         <Text style={styles.loginText}>SAVE</Text>
//       </TouchableOpacity>
//     </View>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e0ffff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     position: "absolute",
//     width: 71,
//     height: 71,
//     left: 31.54,
//     right: 26.92,
//     top: 3.91,
//     bottom: 75.95,

//   },
//   inputView: {
//     backgroundColor: "#f0ffff",
//     borderRadius: 46,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   SaveBtn: {
//     width: 145,
//     borderRadius: 12,
//     height: 52,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     marginBottom:80,
//     backgroundColor: "#18C0C1",
//   },

// });
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ServicePoster3() {
  const [title, settitle] = useState("");
  const [location, setlocation] = useState("");
  const [Description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../Yosr/imageee.png")} />

      <Text style={styles.text1}> Title : </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input title "
          placeholderTextColor="#003f5c"
          onChangeText={(title) => settitle(title)}
        />
      </View>
      <Text style={styles.text3}> Location : </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Original Location should be here "
          placeholderTextColor="#003f5c"
          onChangeText={(location) => setlocation(location)}
        />
      </View>

      <Text style={styles.text}> Description: </Text>

      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Original description should be here "
          placeholderTextColor="#003f5c"
          onChangeText={(Description) => setDescription(Description)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.SaveBtn}>
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: 140,
    height: 140,
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    width: "80%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#18C0C1",
    borderWidth: 1,
  },
  inputView1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    width: 300,
    height: 145,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#18C0C1",
    borderWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  SaveBtn: {
    width: 180,
    borderRadius: 12,

    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#18C0C1",
  },
  text: {
    right: 90,fontSize:18,
  },
  text1: {
    right: 110,
    fontSize: 18,
  },
  text2: {
    right: 110,
    fontSize: 18,
  },
  text3: {
    right: 100,
    fontSize: 18,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});
