import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
  

const GoalItem = props => {
  return (
    <View style={styles.ListItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    ListItem: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-start",
      marginLeft: "11%",
      marginVertical: 5,
      padding: 10,
      backgroundColor: "#5CDB9F",
      width: "70%",
      borderRadius: 5
    }
  });
  

export default GoalItem;
