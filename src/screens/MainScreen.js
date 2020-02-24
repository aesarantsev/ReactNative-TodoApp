import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todoItem={item} onRemove={removeTodo} onOpen={openTodo} />
      )}
    />
  );
  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          source={require("../../assets/empty.png")}
          style={styles.image}
        />
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode:'contain'
  }
});
