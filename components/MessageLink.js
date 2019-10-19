import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";

export default withNavigation(({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("MessageNavigation")}>
    <Text>Hello</Text>
  </TouchableOpacity>
));
