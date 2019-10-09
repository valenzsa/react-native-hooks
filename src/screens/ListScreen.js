import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const shapes = [
    {
      name: "Square"
    },
    {
      name: "Triangle"
    },
    {
      name: "Rectangle"
    }
  ]

  return (
    <View>
      <FlatList
        keyExtractor={(shape) => shape.name}
        data={shapes}
        renderItem={({item}) => {
          return <Text style={styles.textStyle}>{item.name}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "#ff0000"
  }
})

export default ListScreen;