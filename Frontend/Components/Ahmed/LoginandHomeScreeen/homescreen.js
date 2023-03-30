import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={{
          uri: "https://www.transparenttextures.com/patterns/back-pattern.png",
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Khademni</Text>
        </View>

        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require("./digital-marketing.png")}
          />
          <Text style={styles.jobTitle}>Trouvez des services</Text>
          <Text style={styles.subTitle}>
            Découvrez notre plateforme pour trouver des services ou des employeurs près de chez vous rapidement. Simplifiez votre vie avec notre application !
          </Text>



          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.signupText}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("RegistrationScreen")}
          >
            <Text style={styles.signupText}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18C0C1",
  },
  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 2,
  }
  ,
  content: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  image: {
    height: 350,
    width: 350


  },
  jobTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },

  signupButton: {
    backgroundColor: "#fff",
    width: 180,
    borderRadius: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#18C0C1",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  signupText: {
    color: "#18C0C1",
    fontSize: 18,
    fontWeight: "bold",
  }
});
export default HomeScreen