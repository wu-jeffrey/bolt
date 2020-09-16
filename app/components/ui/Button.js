import React, { useState } from "react";
import { TouchableHighlight, StyleSheet } from "react-native";

import { Typography } from "./Typography";

export function Button(props) {
  return (
    <TouchableHighlight style={styles.touchable} onPress={props.onPress}>
      <Typography font="roboto" color="white" style={styles.modalText}>
        {props.title}
      </Typography>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable: {
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    textAlign: "center",
  },
});
