import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddGoal = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  const handleAddGoal = () => {
    addGoal(goal);
    setGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={goal}
        onChangeText={(text) => setGoal(text)}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    height: "15%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
    marginRight: 10,
  },
});

export default AddGoal;
