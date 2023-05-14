//A 250x100px teal screen component with a pink number 28 in the right corner
// Path: components/Screen.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Screen(props) {
  //const randomNumber generates a random number between 1 and 50
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{randomNumber}</Text>
      </View>
      <Text>{props.randomNumbersAmount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "pink",
    fontSize: 50,
    fontWeight: "bold",
  },
});
