import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#d9dddc",
    margin: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get("window").height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "contain",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    marginTop: 5,
  },
  inner_container: {
    padding: 20,
  },
  row_container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    fontStyle: "italic",
    textAlign: "right",
    padding: 5,
    margin: 5,
    fontSize: 17,
    backgroundColor: "#A9A9A9",
    borderRadius:5,
  },
});
