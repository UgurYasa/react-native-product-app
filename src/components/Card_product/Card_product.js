import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Card_product.style'


const CardProduct = ({products}) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <Image source={{uri: products.images[0]}} style={styles.image} />
        <Text style={styles.title_text}>{products.title}</Text>
        <Text style={styles.price_text}>{products.price} $</Text>
        
        {/* Activated if the product is not in stock */}
        {products.stock===0 && (  
          <Text style={styles.instock_text}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  )
}

export default CardProduct