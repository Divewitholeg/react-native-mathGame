import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./components/Screen";

export default function Game() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sum up...</Text>
      <Screen randomNumbersAmount={6} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "teal",
    fontSize: 30,
    fontWeight: "bold",
  },
});
