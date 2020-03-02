import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Error", "Todo name cannot be empty");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={"Enter todo name..."}
      />
      <Feather.Button onPress={pressHandler} name="plus-square">
        Add
      </Feather.Button>
      {/* <Button title="Add" onPress={pressHandler} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd"
  }
});
