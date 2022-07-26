import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export enum TagTheme {
  Success = "success",
  Warning = "warning",
  Error = "error",
  Info = "info",

  Teal = "teal",
  Green = "green",
  Blue = "blue",
  Violet = "violet",
  Purple = "purple",
  Red = "red",
  Pink = "pink",
  Yellow = "yellow",
  Orange = "orange",
  Grey = "grey",
  Black = "black",
}
export default function Tag({
  theme,
  label,
  accessibilityLabel,
}: {
  theme: TagTheme;
  label: string;
  accessibilityLabel?: string;
}) {
  return (
    <View style={[styles.tag, styles[theme]]}>
      <Text style={styles.label} accessibilityLabel={accessibilityLabel}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    marginVertical: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    width: 70,
    flexDirection: "row",
    justifyContent: "center",
  },
  success: {
    backgroundColor: "#21ba45",
  },
  warning: {
    backgroundColor: "#fbbd08",
  },
  error: {
    backgroundColor: "#db2828",
  },
  info: {
    backgroundColor: "#2185d0",
  },
  teal: {
    backgroundColor: "#00b5ad",
  },
  green: {
    backgroundColor: "#21ba45",
  },
  blue: {
    backgroundColor: "#2185d0",
  },
  purple: {
    backgroundColor: "#a333c8",
  },
  violet: {
    backgroundColor: "#6435c9",
  },
  red: {
    backgroundColor: "#db2828",
  },
  pink: {
    backgroundColor: "#e03997",
  },
  yellow: {
    backgroundColor: "#fbbd08",
  },
  orange: {
    backgroundColor: "#f2711c",
  },
  grey: {
    backgroundColor: "#767676",
  },
  black: {
    backgroundColor: "#000000",
  },
  label: {
    fontSize: 10,
    fontWeight: "600",
    color: "white",
  },
});
