
import { StyleSheet,Dimensions  } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#A9A9A9",
    flex: 1,
  },
  image: {
    resizeMode: "contain",
    borderRadius: 10,
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width,
    alignItems: "center",
    zIndex: -1,
  },
  textRightBottomContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    opacity: 0.8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textLeftTopContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    opacity: 1,
    backgroundColor: "rgba(255, 100,100 , 0.8)",
    borderRadius: 100,
  },
  textPercentage: {
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "italic",
    alignItems: "center",
    margin: 15,
    color: "white",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    alignItems: "center",
    margin: 10,
    color: "white",
  },
  textRating: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    padding:25,
  },
  textStockContainer: {
    backgroundColor: "red", // Uygun renk seçimi
   
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignSelf: "center",
  },
  textStock: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 18,
    color: "white", // Uygun renk seçimi
  },
  textDescription: {
    margin: 10,
    marginTop: 0,
    fontStyle: "italic",
    fontSize: 15,
  },
  textBrand: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    padding: 10,
    maxWidth: 250,
    left: -20,
    borderRadius: 15,
    backgroundColor: "#607d8b",
    
  },
  textPrice: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 24,
    padding: 5,
    right: -10,
    backgroundColor: "#607d8b",
    color: "white",
    borderRadius: 15,
  },
  Bar: {
    left: -25,
    padding: 20,
    width: "60%",
    marginLeft: 15,
    borderRadius: 15,
  },
  rowContainer: {
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    width: "90%",
    height: "8%",
    backgroundColor: "#607d8b",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
   
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
