import React, { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaView, View } from "react-native";

import Banner from "../../components/Banner";
import ListViewHome from "../../components/ListViewHome";
import Logo from "../../components/Logo";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products;
      setData(products);
      const randomProducts = [];
      while (randomProducts.length < 6) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];

        if (
          !randomProducts.some((product) => product.id === randomProduct.id)
        ) {
          randomProducts.push(randomProduct);
        }
      }

      setTemp(randomProducts);
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
    fetchData();
  }, []);


  return (
    <SafeAreaView style={{ backgroundColor: "#A9A9A9", flex: 1 }}>
      {temp.length > 0 && (
        <View>
          <Logo style={{ height: "15%",marginBottom:15 }} />
          <Banner products={temp} navigation={props.navigation}/>
          <ListViewHome products={data} navigation={props.navigation}/>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
