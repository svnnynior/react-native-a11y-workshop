import Checkbox from "expo-checkbox";
import { StyleSheet } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import { Todo, TodoCategory } from "../screens/TodoListScreen";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import Tag, { TagTheme } from "./Tag";

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
  todo: { label, description, location, category, isDone },
}: {
  todo: Todo;
}) {
  const colorScheme = useColorScheme();

  return (
    <View
      lightColor="#ffffff"
      darkColor="#191919"
      style={[styles.card, styles.cardShadow, styles.fixHeight]}
    >
      <View darkColor="#191919">
        <View darkColor="#191919" style={styles.rowContainer}>
          <Checkbox style={styles.checkbox} value={isDone} />
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
    // fontStyle: "italic",
    fontWeight: "400",
  },
  selfBottom: {
    alignSelf: "flex-end",
  },
});
