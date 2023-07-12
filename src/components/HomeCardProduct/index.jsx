import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const HomeCardProduct = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.thumbnail }}
        alt="Bekleyiniz"
      ></Image>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.row_container}>
          <Text style={styles.text}>Design by {product.brand}</Text>
          <Text style={styles.text}>${product.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCardProduct;
