import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { StyleSheet, Touchable, TouchableWithoutFeedback } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Todo, TodoCategory, TodoLevel } from "../types/Todo.types";
import Tag, { TagTheme } from "./Tag";
import { Text, View } from "./Themed";

function tagThemeFromCategory(category: TodoCategory): TagTheme {
  switch (category) {
    case TodoCategory.Work:
      return TagTheme.Blue;
    case TodoCategory.Family:
      return TagTheme.Teal;
    case TodoCategory.Personal:
      return TagTheme.Violet;
    case TodoCategory.Miscellaneous:
      return TagTheme.Grey;
    default:
      return TagTheme.Grey;
  }
}

export function TodoCard({
  todo,
  onToggleTodo,
}: {
  todo: Todo;
  onToggleTodo: (todo: Todo) => void;
}) {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const goToTodo = () => {
    navigation.navigate("Todo", {
      todo,
    });
  };

  const { label, description, location, category, isDone } = todo;

  return (
    <TouchableWithoutFeedback onPress={goToTodo}>
      <View
        lightColor="#ffffff"
        darkColor="#191919"
        style={[styles.card, styles.cardShadow, styles.fixHeight]}
      >
        <View darkColor="#191919">
          <View darkColor="#191919" style={styles.rowContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isDone}
              onValueChange={() => onToggleTodo(todo)}
            />
            <Text style={styles.label}>{label}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
          <Tag label={category} theme={tagThemeFromCategory(category)} />
        </View>
        <View darkColor="#191919" style={[styles.rowContainer]}>
          <Entypo
            name="location-pin"
            size={18}
            color={Colors[colorScheme].text}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  cardShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  fixHeight: {
    height: 160,
  },
  checkbox: {
    margin: 8,
    marginLeft: 0,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    color: "grey",
  },
  location: {
    fontWeight: "400",
  },
  selfBottom: {
    alignSelf: "flex-end",
  },
});