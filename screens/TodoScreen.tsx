import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { Todo } from "../types/Todo.types";

export default function TodoScreen({
  route: {
    params: { todo },
  },
}: RootStackScreenProps<"Todo">) {
  return todo === null ? (
    <View style={styles.container}>
      <Text style={styles.title}>{"Unknown Todo"}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{todo?.label}</Text>
      <Text style={styles.description}>{todo?.description}</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginTop: 4,
    fontSize: 16,
    color: "grey",
  },
});
