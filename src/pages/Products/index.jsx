import { TouchableOpacity, View } from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CardProduct from "../../components/CardProduct";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";

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
    <View style={{ backgroundColor: "#A9A9A9", flex: 1 }}>
      {data && (
        <View style={{ flex: 1 }}>
          <Logo style={{ height: "15%", marginBottom: 15 }} />
          <SearchBar onChangeText={onChangeText}></SearchBar>
          <FlatList
            style={{ margin: 5, height: "70%" }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id.toString()}
            data={liste}
            renderItem={renderProducts}
            numColumns={2}
          />
        </View>
      )}
    </View>
  );
};

export default Products;
