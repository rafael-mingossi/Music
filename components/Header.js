import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <Text style={styles.headerTxt}>
        MUSIC <Ionicons name="musical-notes-outline" size={24} color="white" />
        <Ionicons name="musical-note-outline" size={24} color="white" />
      </Text>
    </View>
  );
};

export default Header;
