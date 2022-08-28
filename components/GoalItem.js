import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ goal, index, deleteGoalHandler, id }) {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, id)}>
      <Text style={styles.goalItems} key={index}>
        {goal}
      </Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    backgroundColor: "#850E35",
    color: "#fff",
    borderRadius: 8,
  },
});
