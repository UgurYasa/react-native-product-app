import { FlatList,TouchableOpacity } from "react-native";
import React from "react";
import HomeCardProduct from "../HomeCardProduct";
import styles from "./style";

const ListViewHome = ({ products,navigation }) => {
  const renderProducts = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToPage(item)}>
      <HomeCardProduct product={item} />
    </TouchableOpacity>
  );
  const navigateToPage = (item) => {
    navigation.navigate("ProductDetail", { item: item });
  };
  return (
    <FlatList
    
    style={styles.container}
      keyExtractor={(item, index) => item.id.toString()}
      data={products}
      renderItem={renderProducts}
    />
  );
};

export default ListViewHome;
