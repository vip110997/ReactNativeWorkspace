import React from "react";
import { StyleSheet, View } from "react-native";

// Components
 import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'


export default function App() {
  return (
    <View style={styles.fullScreen}>
      <Header title="Palindrome Checker"/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen:{
    alignItems:'center',
    justifyContent:'center'
  }
});
