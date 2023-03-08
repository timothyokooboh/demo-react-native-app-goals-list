import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import AddGoal from "./components/AddGoal";
import GoalsList from "./components/GoalsList";

const App = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    if (!goal) return;
    setGoals((prevGoals) => [...prevGoals, { text: goal }]);
  };

  const removeItem = (index) => {
    const updatedData = [...goals];
    updatedData.splice(index, 1);
    setGoals(updatedData);
  };

  return (
    <View style={styles.container}>
      <AddGoal addGoal={addGoal} />

      <View style={{ marginTop: 20, flex: 1 }}>
        {goals?.length > 0 ? (
          <Fragment>
            <Text style={styles.heading}>List of goals</Text>
            <GoalsList goals={goals} removeItem={removeItem} />
          </Fragment>
        ) : (
          <Text style={{ fontSize: 20 }}>No goals yet o.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default App;
