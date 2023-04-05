import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import jair from "../../../assets/images/jair.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";

const IntroPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* An image as leading and an absolute positioned container with a text */}
      <Image source={jair} style={styles.image} />
      <View style={styles.titleContainer}>
         <Text style={styles.title}>Make your moment with music</Text>
      </View>


      {/* Container or just a text with its subtext */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Find music & enjoy</Text>
        <Text style={styles.subtext}>
          Search, get and save your favourite music on your playlist make.
        </Text>
      </View>

      {/* Container with two horizontally aligned buttons */}
      <View style={styles.buttonContainer}>
         <CustomButton type="PRIMARY" text={"sign in"}/>
         <CustomButton type="SECONDARY" text={"sign up"}/>
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
    marginBottom: 40,
  },
  titleContainer: {
   position: "absolute",
   top: 70,
   left: "20%",
   textAlign: "center",
   width: 250
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.9,
    textTransform: "capitalize",
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
   fontSize: 25,
   fontWeight: "bold",
   color: "#000000",
   letterSpacing: 0.9,
   marginBottom: 10,
   textTransform: "capitalize",
  },
  subtext: {
   fontSize: 16,
   fontWeight: "400",
   color: "#6B7280",
   marginHorizontal: 20,
   textAlign: "center",
  },
  buttonContainer: {
   position: "absolute",
   bottom: 20,
   width: "100%",
   flexDirection: "row",
   justifyContent: "space-around",
   alignItems: "center",
   paddingVertical: 15,
  },

});

export default IntroPage;
