import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler, goalInputHandler, userInput }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Your Goal!"
        placeholderTextColor="#fff"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={userInput}
      />
      <Button title="Submit" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    color: "#fff",
  },
});
