import React, { Component, useRef } from "react";
import { TextInput } from "react-native";
import {
  Animated,
  Button,
  LayoutAnimation,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Dimensions, Text, View } from "react-native";
const { width, height } = Dimensions.get("screen");

export default function History() {
  return (
    <View style={styles.container}>
      <Text>okay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
