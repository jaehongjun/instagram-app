import React from "react";
import { View, AsyncStorage } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";
import { useIsLoggedIn } from "../AuthContext";
export default () => {
  const isLoggedIn = useIsLoggedIn();
  // const isLoggedIn = true;
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
