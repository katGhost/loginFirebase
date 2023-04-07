import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import black from "../../../assets/images/black.jpg"

const SignUp = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* An image as leading and an absolute positioned container with a text */}
      <Image source={black} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>chill comfortably</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F1F5F9",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 360,
    marginBottom: 20,
    borderRadius: 15,
    marginTop: 35,
    marginBottom: 20,
  },
  titleContainer: {
    position: "absolute",
    top: 70,
    left: "20%",
    textAlign: "center",
    width: 250,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#BBF7D0",
    textAlign: "center",
    letterSpacing: 0.9,
    textTransform: "capitalize",
  },
});

export default SignUp;