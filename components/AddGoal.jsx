import { Fragment, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";

const AddGoal = ({ addGoal }) => {
  const [goal, setGoal] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddGoal = () => {
    addGoal(goal);
    setGoal("");
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Button onPress={() => setIsModalVisible(true)} title="New Goal" />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => Alert.alert("you closed the modal")}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, .1)",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={styles.input}
            value={goal}
            onChangeText={(text) => setGoal(text)}
          />
          <Button title="Add Goal" onPress={handleAddGoal} />
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "solid",
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "100%",
    marginVertical: 20,
    backgroundColor: "#fff",
  },
});

export default AddGoal;
