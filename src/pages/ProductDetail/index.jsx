import { SafeAreaView, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import { View } from "react-native";
import StarRating from "react-native-star-rating";
import styles from "./style";

const ProductDetail = (props) => {
  const product = props.route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <Logo style={{ height: "15%",marginTop: 24,marginBottom: 15,}} />
      <View>
        <View style={styles.textLeftTopContainer}>
          <Text style={styles.textPercentage}>
            -%{product.discountPercentage.toString()}
          </Text>
        </View>
        <Image style={styles.image} source={{ uri: product.thumbnail }} />
        <View style={styles.textRightBottomContainer}>
          <Text style={styles.textTitle}>{product.title.toString()}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.Bar}>
          <StarRating
            fullStarColor="yellow"
            disabled={true}
            maxStars={5}
            rating={4}
            halfStarEnabled={true}
            starSize={16}
          />
        </View>
        <Text style={styles.textRating}>{product.rating.toString()} Rating</Text>
      </View>
      <View style={styles.textStockContainer}>
          <Text style={styles.textStock}> The last {product.stock.toString()} remaining products</Text>
        </View>
      <Text style={styles.textTitle}>Description:</Text>
      <Text style={styles.textDescription}>
        {product.description.toString()}
      </Text>
      <View style={styles.rowContainer}>
        <Text style={styles.textBrand}>
          Design by {product.brand.toString()}
        </Text>
        <Text style={styles.textPrice}>${product.price.toString()}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert(product.title.toString() + " Alındı");
        }}
      >
        <Text style={styles.buttonText}>BUY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;
