import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {

  const [colors, setColors] = useState([])

  return (
    <View>
      <Button
        title="Random Color"
        onPress={() => {
          console.log('Button Pressed')

          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
          console.log(item)
          return (
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          )
        }}
      />
      

    </View>
  )
}

const randomRGB = () => {
  //console.log('randomRGB')

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  //console.log(red, green, blue);

  return `rgb(${red}, ${green}, ${blue})`
}

const style = StyleSheet.create({});

export default ColorScreen;