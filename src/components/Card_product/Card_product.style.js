import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: Dimensions.get("window").height / 4,
    borderRadius: 10,
    margin: 5,
  },
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#d9dddc",
    justifyContent: "space-around",
    borderRadius: 10,
  },

  title_text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price_text: {
    fontWeight: "400",
    fontSize: 16,
  },
  instock_text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
  boxContainer: {
    flex: 1,
    backgroundColor: "bisque",
  },
});
