import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

const Banner = ({products,navigation}) => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollToCenter();
  }, []);

  const scrollToCenter = () => {
    if (scrollViewRef.current) {
      const screenWidth = Dimensions.get("window").width;
      const scrollToX = Math.floor(products.length / 2) * screenWidth;

      scrollViewRef.current.scrollTo({ x: scrollToX, animated: true });
    }
  };

  const navigateToPage = (item) => {
    navigation.navigate("ProductDetail", { item: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => navigateToPage(product)}
          >
            <SafeAreaView>
              <Image style={styles.image} source={{ uri: product.thumbnail }} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{product.title.toString()}</Text>
              </View>
            </SafeAreaView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Banner;
