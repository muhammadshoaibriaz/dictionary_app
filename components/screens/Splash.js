import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Search");
    }, 4000);
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../images/dictionary.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
  },
});
