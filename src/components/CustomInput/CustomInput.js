import React from "react";
import { View, TextInput, StyleSheet } from "react-native";


const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#FFFFFF",
   width: "100%",

   borderRadius: 5,

   paddingHorizontal: 15,
   paddingVertical: 10,
   marginVertical: 5,
  },
});

export default CustomInput;
