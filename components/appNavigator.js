import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { ThemeProvider, useTheme } from "react-native-paper";
import History from "./screens/History";
import Results from "./screens/Results";
import Search from "./screens/Search";
import Splash from "./screens/Splash";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <ThemeProvider>
      <NavigationContainer theme={{ colors: { background: "#f9f9f9" } }}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              animation: "fade_from_bottom",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
