import { View, Text, Image} from 'react-native'
import React from 'react'
import styles from './style'




const CardProduct = (props) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.container}>
        <Image source={{uri: props.products.thumbnail}} style={styles.image} />
        <Text style={styles.title_text}>{props.products.title}</Text>
        <Text style={styles.price_text}>${props.products.price}</Text>
        
        {/* Activated if the product is not in stock */}
        {props.products.stock===0 && (  
          <Text style={styles.instock_text}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  )
}

export default CardProduct