import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "../../node_modules/styled-components/native/dist/styled-components.native.cjs";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
      <Text>Take</Text>
    </TouchableOpacity>
  </View>
);
