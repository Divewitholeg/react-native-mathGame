//A 250x100px teal screen component with a pink number 28 in the right corner
// Path: components/Screen.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RandomNumber from "./RandomNumber";

export default function Screen(props) {
  //const randomNumberArray generates a random number for four numbers out of props.randomNumberAmount and each number generated is pushed into the array
  const randomNumberArray = [];
  for (let i = 0; i < props.randomNumbersAmount; i++) {
    randomNumberArray.push(Math.floor(Math.random() * 10) + 1);
  }
  //const randomNumber is a sum of four random values from the array
  const randomNumber = randomNumberArray
    .slice(0, props.randomNumbersAmount - 2)
    .reduce((a, b) => a + b, 0);
  //randomNumberSelected is an array of indexes of selected values from the randomNumberArray
  const randomNumberSelected = [0, 4];

  //isSelected is a function that checks if the value is selected
  const isSelected = (index) => {
    return randomNumberSelected.indexOf(index) >= 0;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{randomNumber}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {randomNumberArray.map((number, index) => (
          <RandomNumber
            isSelected={isSelected(index)}
            key={index}
            number={number}
          />
        ))}
      </View>
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
  //optionsContainer is a flex-box with two teal rectangles in a row wrapping
  //max two in a row

  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //max two in a row
    maxWidth: 260,
    marginTop: 30,
  },
});
