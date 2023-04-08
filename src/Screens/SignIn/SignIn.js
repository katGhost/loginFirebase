import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import mpumelelo from "../../../assets/images/mpumelelo.jpg";
import jakayla from "../../../assets/images/jakayla.jpg";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "./styles";

const SignIn = () => {
  const onSignPress = () => {
    console.warn("awaiting firebase...");
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* An image as leading and an absolute positioned container with a text */}
      <Image source={jakayla} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enjoy your day in music</Text>
      </View>

      {/* Sign In text */}
      <Text style={styles.subtitle}>sign in</Text>

      {/* Text Input */}
      <View style={styles.inputContainer}>
        <CustomInput placeholder={"Enter your email"} value={'email'} />
        <CustomInput
          placeholder={"Enter your password"}
          value={"password"}
          secureTextEntry={true}
        />
      </View>

      {/* Forgot passowrd pressable text */}
      <Pressable
        onPress={() => {
          console.warn("preessedd");
        }}
        style={styles.pressable}
      >
        <Text style={styles.text}>forgot password</Text>
      </Pressable>

      {/* BOttom view with button and account sign up link */}
      <View style={styles.buttonContainer}>
        <Pressable onPress={onSignPress} style={styles.button}>
          <Text style={styles.btnText}>sign in</Text>
        </Pressable>

        {/* text */}
        <View style={styles.textContainer}>
          <Text style={styles.subtext}>Don't have an account? </Text>
          <Text style={styles.sub}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
