import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Header from '../Header/Header'

const Listview = (props) => {
  return (
    <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header onChangeText={props.onChangeText}
        text={props.text}></Header>}
        keyExtractor={(item, index) => item.id.toString()}
        data={props.liste}
        renderItem={props.renderProducts}
        numColumns={2}
        
      />
  )
}

export default Listview