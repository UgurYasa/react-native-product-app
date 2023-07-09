import { Dimensions, StyleSheet, View } from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CardProduct from "../components/Card_product/Card_product";
import Logo from "../components/Logo/Logo";
import Header from "../components/Header/Header";

const ProductsScreen = () => {
  const [data, setData] = useState([]);
  const [liste, setListe] = useState(data);
  const [text, onChangeText] = useState("");

  const handleSearch = () => {
    const filteredList = data.filter((product) => {
      if (data.title && text && text != "") {
        return data.title.toUpperCase().includes(text.toUpperCase());
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
  const renderProducts = ({ item }) => (
    <CardProduct products={item}></CardProduct>
  );
  return (
    <View style={{backgroundColor:"bisque"}}>
      {data && (
        <FlatList
          ListHeaderComponent={
            <View>
              <Header onChangeText={onChangeText} text={text}></Header>

              <Logo style={styles.logo} />
            </View>
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id.toString()}
          data={liste}
          renderItem={renderProducts}
          numColumns={2}
        />
      )}
       <View style={{width:Dimensions.get("window").width/1.5,height:200,backgrounColor:"red"}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {

    height: 150,
    margin: 0,
    marginTop: 15,
    marginHorizontal:"25%"
  },
});

export default ProductsScreen;
