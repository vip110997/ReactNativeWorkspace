import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop:40,
    width: "90%",
    height: 80,
    // paddingTop: 0,
    borderRadius:5,
    borderWidth:1,
    // backgroundColor: "#011f4b",
    alignItems: "center",
    justifyContent: 'center'
  },
  title:{
      color:'#011f4b',
      fontSize:25,
      fontWeight:'bold',

  }
});

export default Header;
