import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Header.style'

const Header = (props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>COSMOS</Text>
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      value={props.text}
      placeholder="Ara..."
   
      ></TextInput>

  </View>
  )
}

export default Header