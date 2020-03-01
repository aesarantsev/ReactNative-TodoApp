import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppText } from "../components/ui/AppText";

export const Todo = ({ todoItem, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        onOpen(todoItem.id);
      }}
      onLongPress={onRemove.bind(null, todoItem.id)}
    >
      <View style={styles.todo}>
        <AppText>{todoItem.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 5
  }
});
