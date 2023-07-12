import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    resizeMode: "contain",
    borderRadius: 10,
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width,
    alignItems: "center",
    borderWidth:2,
    borderColor:"black"
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    opacity:0.7,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    alignItems: "center",
    margin: 15,
    color: "white",
    textAlign:"auto"
  },
  contentContainer: {},
});
