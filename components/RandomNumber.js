import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RandomNumber(props) {
  const handlePress = () => {
    console.log(props.number, props.isSelected);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.option, props.isSelected && styles.selected]}>
        {props.number}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    width: 100,
    height: 100,
    backgroundColor: "teal",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "pink",
    margin: 10,
  },
  selected: {
    opacity: 0.6,
  },
});
