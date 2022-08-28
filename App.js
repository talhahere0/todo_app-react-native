import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [goals, setGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setUserInput(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, userInput]);
    setUserInput("");
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        userInput={userInput}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceHorizontal={false}>
          {goals.map((goal, index) => {
            return (
              <GoalItem
                deleteGoalHandler={deleteGoalHandler}
                id={id}
                goal={goal}
                key={goal}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#2A0944",
  },

  goalsContainer: {
    flex: 5,
  },
});
