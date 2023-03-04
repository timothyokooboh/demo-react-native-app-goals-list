import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";

const App = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    setGoals((prevGoals) => [...prevGoals, goal]);
    setGoal("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>

      <View>
        <Text style={styles.heading}>List of goals</Text>
        <View>
          {goals.map((item, idx) => (
            <Text key={idx} style={{ paddingBottom: 5 }}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingBottom: 30,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default App;
