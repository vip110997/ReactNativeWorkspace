import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

import GoalItem from './components/GoalItem';

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [goalsList, setgoalsList] = useState([]);

  const inputGoalHandler = enteredText => {
    setInputGoal(enteredText);
  };

  const addGoalHandler = () => {
    setgoalsList(currentGoals => [...currentGoals, {key:Math.random().toString(),value:inputGoal}]);
  };

  // const clearGoalHandler=()=>{
  //   setgoalsList([]); 
  // }

  return (
    <View style={styles.fullView}>
     
      <FlatList
        data={goalsList}
        renderItem={itemData => (
         <GoalItem title={itemData.item.value}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullView: {
    paddingTop: 20
  },
 

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
