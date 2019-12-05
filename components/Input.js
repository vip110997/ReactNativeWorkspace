import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Input = props => {
  return <TextInput {...props} style={{...styles.textInput,...props.style}} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
    fontSize: 20,
    paddingHorizontal:20,
  }
});

export default Input;
