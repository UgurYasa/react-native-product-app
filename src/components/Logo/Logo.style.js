import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 30,
    marginBottom: 30,
    height: Dimensions.get("window").height / 5,
    width: "60%",
    borderRadius: 100,
    backgroundColor: "bisque",
  },
});
