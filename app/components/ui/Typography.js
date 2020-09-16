import React from "react";
import { StyleSheet, Text } from "react-native";

export function Typography(props) {
  const font = props?.font || "quicksand";
  const weight = props?.weight || "regular";
  const size = props?.size || 12;
  const color = props?.color || "black";

  return (
    <Text style={{ ...textStyle(font, weight, size, color), ...props.style }}>
      {props.children}
    </Text>
  );
}

function textStyle(font, weight, size, color) {
  return {
    fontFamily: fontFamilies[`${font}_${weight}`],
    fontSize: size,
    color: color,
  };
}

const fontFamilies = {
  quicksand_light: "Quicksand_300Light",
  quicksand_regular: "Quicksand_400Regular",
  quicksand_medium: "Quicksand_500Medium",
  quicksand_semibold: "Quicksand_600SemiBold",
  quicksand_bold: "Quicksand_700Bold",
  roboto_thin: "Roboto_100Thin",
  roboto_light: "Roboto_300Light",
  roboto_regular: "Roboto_400Regular",
  roboto_medium: "Roboto_500Medium",
  roboto_bold: "Roboto_700Bold",
  roboto_black: "Roboto_900Black",
};
