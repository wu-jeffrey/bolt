import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import { FontProvider } from "./app/components/providers/Font/FontProvider";
import { HomeScreen } from "./app/screens/HomeScreen/HomeScreen";
import LocationProvider from "./app/components/providers/Location/LocationProvider";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LocationProvider>
        <FontProvider>
          <StatusBar style="auto" />
          <HomeScreen></HomeScreen>
        </FontProvider>
      </LocationProvider>
    </SafeAreaView>
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
