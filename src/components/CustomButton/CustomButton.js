import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, type="PRIMARY"}) => {
   const background = type === "PRIMARY" ? "#FFFFFF" : "#2563EB";
   // make text distinguishable for each button
   const color = type === "PRIMARY" ? "#000000" : "#FFFFFF";

  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor: background}]}>
      <Text style={[styles.text, {color: color}]}>{text}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
   button: {
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 30,
   },
   text: {
      fontSize: 16,
      fontWeight: "bold",
      textTransform: "capitalize",
      letterSpacing: 0.9,
   }
})

export default CustomButton