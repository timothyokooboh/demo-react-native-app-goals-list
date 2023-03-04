import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList,
} from "react-native";

const App = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    setGoals((prevGoals) => [...prevGoals, { text: goal }]);
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
        <Button title="Add Goals" onPress={addGoal} />
      </View>

      <View style={{ height: "85%" }}>
        <Text style={styles.heading}>List of goals</Text>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => index}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text style={{ color: "#efefef" }}>
                {itemData.item.text}
                {itemData.index}
              </Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

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

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    borderRadius: 5,
  },
});

export default App;
