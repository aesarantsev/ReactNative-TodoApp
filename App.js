import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState("1");
  const [todos, setTodos] = useState([
    { id: "1", title: "Write app on React Native" },
    { id: "2", title: "todo 2" }
  ]);

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
    const todo = todos.find(t => t.id === id);
    // Works on both Android and iOS
    Alert.alert(
      "Delet todo",
      `Do you seriously want to remove the "${todo.title}"? `,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id != id));
          }
        }
      ],
      { cancelable: true }
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    ></MainScreen>
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        goBack={() => {
          setTodoId(null);
        }}
        todo={selectedTodo}
        onRemove = {removeTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
