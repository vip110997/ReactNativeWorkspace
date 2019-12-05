import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

// Components
import Container from "../components/Container";
import Input from "../components/Input";

const StartGameScreen = props => {
  const [inputValue, setInputValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [chosenWord, setChosenWord] = useState("");

  const textInputHandler = inputText => {
    setInputValue(inputText);
  };

  const palindromeChecker = str => {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, "");
    var reverseStr = lowRegStr
      .split("")
      .reverse()
      .join("");
    return reverseStr === lowRegStr;
  };

  const confirmInputHandler = () => {
    if (inputValue == "") {
      Alert.alert("Invalid Word", "The word cannot be blank", [
        { text: "Okay", style: "destructive", onPress: clearInputHandler }
      ]);
    } else {
      setChosenWord(inputValue);
      setConfirmed(true);
      setInputValue("");
      Keyboard.dismiss();
    }
  };

  let checkingWord;

  if (confirmed) {
    // setConfirmed(false);
    if (palindromeChecker(chosenWord)) {
      checkingWord = <Text>The word you entered is a Palindrome</Text>;
    } else {
      checkingWord = <Text>The word you entered is not a Palindrome</Text>;
    }
  }

  const clearInputHandler = () => {
    setInputValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.fullScreen}>
        <Text style={styles.title}>Enter Word</Text>
        <Container style={styles.inputContainer}>
          <Input
            blurOnSubmit
            autoCorrect={false}
            onChangeText={textInputHandler}
            value={inputValue}
          />
          <View style={styles.buttonContainer}>
            <Button title="Confirm" onPress={confirmInputHandler} />
            <Button title="Reset" onPress={clearInputHandler} />
          </View>
        </Container>
        <View style={styles.displayMessage}>
          <Text style={styles.displayMessageWord}>{checkingWord}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    // flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  inputContainer: {
    width: 250,
    maxWidth: "80%"
  },
  displayMessage: {
    // fontSize: 50,
    marginVertical: 20
  },
  displayMessageWord:{
      fontSize:15,
  }
});

export default StartGameScreen;
