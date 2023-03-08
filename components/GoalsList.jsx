import { FlatList, Pressable, StyleSheet, Text } from "react-native";

const GoalsList = ({ goals, removeItem }) => {
  return (
    <FlatList
      data={goals}
      keyExtractor={(item, index) => index}
      renderItem={(itemData) => (
        <Pressable
          android_ripple={{ color: "red" }}
          style={({ pressed }) => {
            if (!pressed) return styles.listItem;
            if (pressed) return { ...styles.listItem, backgroundColor: "red" };
          }}
          onPress={() => removeItem(itemData.index)}
        >
          <Text style={{ color: "#efefef" }}>{itemData.item.text}</Text>
        </Pressable>
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: "red",
  },
});

export default GoalsList;
