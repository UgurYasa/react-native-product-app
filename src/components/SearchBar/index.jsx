import { View,TextInput } from "react-native";
import React from "react";
import styles from "./style";


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.text}
        placeholder="Search..."
      ></TextInput>
    </View>
  );
};

export default SearchBar;
