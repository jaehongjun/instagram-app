import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import styles from "../styles";

const Container = styled.View``;

export default () => (
  <Container>
    <ActivityIndicator color={styles.blackColor}></ActivityIndicator>
  </Container>
);
