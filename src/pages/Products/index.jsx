import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CardProduct from "../../components/CardProduct";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [liste, setListe] = useState(data);
  const [text, onChangeText] = useState("");

  const handleSearch = () => {
    const filteredList = data.filter((product) => {
      if (product.title && text && text !== "") {
        return product.title.toUpperCase().includes(text.toUpperCase());
      }
      return liste;
    });
    setListe(filteredList);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products;
      setData(products);
      setListe(products);
    } catch (error) {
      Alert.alert("Uyarı", "Bir Hata Oluştu.", [
        {
          text: "Tekrar Dene",
          onPress: () => {
            fetchData();
          },
        },
      ]);
    }
  };

  useEffect(() => {
    data === [] ? "" : handleSearch();
  }, [text]);

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToPage = (item) => {
    navigation.navigate("ProductDetail", { item: item });
  };

  const renderProducts = ({ item }) => (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigateToPage(item)}>
      <CardProduct products={item}></CardProduct>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#A9A9A9" }}>
      {data && (
        <View>
          <Logo style={{height:"20%"}} />
          <Header onChangeText={onChangeText}></Header>
          <FlatList
            style={{ margin: 5, height: "68%" }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id.toString()}
            data={liste}
            renderItem={renderProducts}
            numColumns={2}
          />
        </View>
      )}
    </SafeAreaView>
  );
};



export default Products;
