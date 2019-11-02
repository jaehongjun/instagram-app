import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  // const isLoggedIn = false;
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <MainNavigation></MainNavigation>
      ) : (
        <AuthNavigation></AuthNavigation>
      )}
    </View>
  );
};
