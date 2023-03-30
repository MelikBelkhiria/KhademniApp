import React, { useState, useEffect } from 'react';
import { Animated, Text, Image, View, StyleSheet } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

const SplashScreen = ({ navigation }) => {
  const [animationValue, setAnimationValue] = useState(new Animated.Value(100));
  const [fadeValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: -120,
      duration: 1700,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          navigation.navigate('screenhome');
        }, 100);
      });
    });
  }, []);

  const magnifyingGlassTransform = {
    transform: [
      {
        translateX: animationValue,
      },
    ],
  };

  const textOpacity = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <Image style={styles.briefcase} source={require("../../assets/suit.png")} />
      <Animated.Image
        style={[styles.magnifyingGlass, magnifyingGlassTransform]}
        source={require("../../assets/1076744.png")}
      />
      <Animated.Text style={[styles.k, { opacity: textOpacity }]}>K</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  k: {
    fontSize: 50,
    color: "#DF4066",
    fontWeight: "bold",
    position: "absolute",
    top: "49%",
    textShadowColor:"black",
    textShadowRadius:5,
  },
  container: {
    flex: 1,
    backgroundColor: "#18C0C1",
    alignItems: "center",
    justifyContent: "center",
  },
  briefcase: {
    height: 200,
    width: 200,
  },
  magnifyingGlass: {
    position: "absolute",
    top: "46.5%",
    right: -21,
    height: 150,
    width: 150,
  },
});

export default SplashScreen;
