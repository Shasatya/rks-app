import React from "react";
import { Stack } from "expo-router";

const layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="home" />
      <Stack.Screen name="enterDetails" />
    </Stack>
  );
};

export default layout;
