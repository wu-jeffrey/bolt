import React from "react";
import { StyleSheet, Text } from "react-native";

export function Typography(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: { fontFamily: "Quicksand_400Regular" },
});
