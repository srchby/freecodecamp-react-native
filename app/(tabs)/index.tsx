import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/athens.jpg")}
        resizeMode='cover'>
        <Text
          style={styles.text}>
          Plato's Republic
        </Text>
        <Link 
        style={styles.link}
        href="/about">About</Link>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 72,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 5,
    margin: 100,
    marginBottom: 200,
  },
  link: {
    color: "#70b8ff",
    textDecorationLine: "underline",
    fontSize: 48,
    textAlign: "center",
  }
})

export default app