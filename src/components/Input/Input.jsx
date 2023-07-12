import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
