import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddToo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id));
  };

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddToo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todoItem={item} onRemove={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
