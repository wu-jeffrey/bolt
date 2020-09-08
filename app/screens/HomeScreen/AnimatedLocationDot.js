import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Easing } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const AnimatedLocationDot = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(opacity, {
        toValue: 1,
        delay: 1000,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View>
      <View style={styles.dot}>
        <MaterialCommunityIcons name="circle" size={15} color="#5FFF9F" />
      </View>
      <Animated.View
        style={[
          styles.ring,
          {
            opacity: opacity,
          },
        ]}
      >
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={28}
          color="#5FFF9F"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    position: "absolute",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ring: {
    position: "absolute",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 1 }],
  },
});
