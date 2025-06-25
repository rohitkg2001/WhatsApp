import { Stack } from "expo-router";
import React from "react";

const RootNavigation = () => {
  return (
    <Stack>
      {/* <Text>RootNavigation</Text> */}
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootNavigation;
