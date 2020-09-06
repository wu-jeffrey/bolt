import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { FontProvider } from "./app/components/providers/FontProvider/FontProvider";
import { HomeScreen } from "./app/screens/HomeScreen/HomeScreen.js";
import { Typography } from "./app/components/ui/Typography.js";

export default function App() {
  return (
    <FontProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreen></HomeScreen>
      </SafeAreaView>
    </FontProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
