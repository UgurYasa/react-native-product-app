import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import StarRating from "react-native-star-rating";
import Slider from "@react-native-community/slider";
import Logo from "../../components/Logo";
import Input from "../../components/Input/Input";

const AddProduct = (props) => {
  //There is a problem when sending data to the api, you can use the api in the comment line to check if the codes are working correctly
  // const api = "https://fakestoreapi.com/products";
  const api = "https://dummyjson.com/products";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0.0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail:"",
    images: [],
  });

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  //function required for navigation
  const navigateToPage = () => {
    props.navigation.navigate("ProductDetail", { item: formData });
  };
// TextInput bileşenlerini boşaltmak için formData'yı sıfırla
  const resetInput = () => {
    setFormData({
      title: "",
      description: "",
      price: 0.0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail:"",
      images: [],
    });
  };

  const handleSubmit = () => {
    resetInput();

    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(console.log);
    navigateToPage();
  };

  return (
    <View style={styles.container}>
      <Logo style={{ height: "15%" }} />
      <ScrollView>
        <Input
          label="Title:"
          value={formData.title}
          onChangeText={(text) => handleChange("title", text)}
        />
        <Input
          label="Brand:"
          value={formData.brand}
          onChangeText={(text) => handleChange("brand", text)}
        />

        <Input
          style={{ height: 70 }}
          label="Description:"
          value={formData.description}
          onChangeText={(text) => handleChange("description", text)}
        />

        <Input
          label="Price:"
          value={formData.price.toString()}
          onChangeText={(text) =>
            handleChange("price", parseFloat(text) ? parseFloat(text) : 0)
          }
        />
        <Text style={styles.text}>
          Discount Percentage: %{formData.discountPercentage}
        </Text>
        <View
          style={[styles.Bar, { backgroundColor: "#888", borderRadius: 15 }]}
        >
          <Slider
            value={parseFloat(formData.discountPercentage)}
            minimumValue={0}
            maximumValue={100}
            step={1}
            onValueChange={(text) =>
              handleChange("discountPercentage", parseInt(text, 10))
            }
          />
        </View>

        <Text style={styles.text}>Rating:{formData.rating}</Text>
        <View style={styles.Bar}>
          <StarRating
            fullStarColor="yellow"
            disabled={false}
            maxStars={5}
            rating={formData.rating}
            selectedStar={(text) => handleChange("rating", text)}
            halfStarEnabled={true}
            starSize={48}
          />
        </View>

        <Input
          label="Stock:"
          value={formData.stock.toString()}
          onChangeText={(text) =>
            handleChange("stock", parseInt(text, 10) ? parseInt(text, 10) : 0)
          }
        />

        <Input
          label="Category:"
          value={formData.category}
          onChangeText={(text) => handleChange("category", text)}
        />

        <Input
          label="Images:"
          value={formData.thumbnail}
          onChangeText={(text) => handleChange("thumbnail", text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={[styles.text, { alignSelf: "center" }]}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
  },
  row: {
    flexDirection: "row",
  },
  Bar: {
    padding: 10,
    width: "90%",
    marginLeft: 15,
    backgroundColor: "#888",
    borderRadius: 15,
  },
  button: {
    margin: 10,
    backgroundColor: "#607d8b",
    borderRadius: 15,
  },
  text: { margin: 15, fontSize: 20, fontWeight: "bold", fontStyle: "italic" },
});

export default AddProduct;
