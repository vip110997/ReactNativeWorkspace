import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Goal"
        style={styles.textInput}
        onChangeText={inputGoalHandler}
        value={inputGoal}
      />
      <Button title="+" style={styles.button} onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50
  },
  textInput: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    marginBottom: 10,
    borderRadius: 5
  }
});

export default GoalItem;
