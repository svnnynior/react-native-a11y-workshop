import { FlatList, StyleSheet, TouchableHighlight } from "react-native";
import { TodoCard } from "../components/TodoCard";

import { RootTabScreenProps } from "../types";

export enum TodoCategory {
  Work = "Work",
  Family = "Family",
  Personal = "Personal",
  Miscellaneous = "Miscellaneous",
}

export enum TodoLevel {
  Important = "important",
  SoSo = "so so",
  Whatever = "whatever",
}

export type Todo = {
  id: string;
  importance: TodoLevel;
  category: TodoCategory;
  label: string;
  description: string;
  location: string;
  isDone: boolean;
};

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

export default function TodoListScreen({
  navigation,
}: RootTabScreenProps<"TodoList">) {
  return (
    <FlatList
      style={styles.container}
      data={TODO_LIST}
      renderItem={({ item }) => <TodoCard todo={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
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
