import { useCallback, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { TodoCard } from "../components/TodoCard";

import { RootTabScreenProps } from "../types";
import { Todo, TodoCategory, TodoLevel } from "../types/Todo.types";

const TODO_LIST: Todo[] = [
  {
    id: "1",
    importance: TodoLevel.SoSo,
    category: TodoCategory.Family,
    label: "Buy grocery",
    description: "Milk, Eggs, and Meat.",
    location: "Market",
    isDone: false,
  },
  {
    id: "2",
    importance: TodoLevel.Whatever,
    category: TodoCategory.Personal,
    label: "Exercise",
    description: "30 minutes of running, please.",
    location: "Home",
    isDone: false,
  },
  {
    id: "3",
    importance: TodoLevel.Important,
    category: TodoCategory.Personal,
    label: "Laundry",
    description: "Need to prepare clothes for the trip.",
    location: "Home",
    isDone: true,
  },
  {
    id: "4",
    importance: TodoLevel.Important,
    category: TodoCategory.Work,
    label: "Talk with Tech Lead",
    description:
      "Discuss with the tech lead about the proposed system architecture.",
    location: "Anywhere",
    isDone: true,
  },
];

const updateTodoList = (list: Todo[], item: Todo): Todo[] => {
  return list.map((todo) => {
    return todo.id === item.id ? { ...item, isDone: !item.isDone } : todo;
  });
};

export default function TodoListScreen({
  navigation,
}: RootTabScreenProps<"TodoList">) {
  const [todos, setTodos] = useState(TODO_LIST);
  const handleChange = useCallback(
    (todo) => setTodos((currentTodos) => updateTodoList(currentTodos, todo)),
    []
  );
  return (
    <FlatList
      style={styles.container}
      data={todos}
      renderItem={({ item }) => (
        <TodoCard todo={item} onToggleTodo={handleChange} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
