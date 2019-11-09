import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import styles from "../styles";

const NavIcon = ({
  focused = true,
  name,
  color = styles.blackColor,
  size = 26
}) => (
  <Ionicons
    name={name}
    color={focused ? color : styles.lightGreyColor}
    size={size}
  />
);

NavIcon.propTypes = {
  color: PropTypes.string,
  focused: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default NavIcon;
