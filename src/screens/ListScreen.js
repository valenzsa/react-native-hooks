import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {
      name: "Friend 1",
      age: "Age 20"
    },
    {
      name: "Friend 2",
      age: "Age 45"
    },
    {
      name: "Friend 3",
      age: "Age 32"
    },
    {
      name: "Friend 4",
      age: "Age 27"
    },
    {
      name: "Friend 5",
      age: "Age 53"
    },
    {
      name: "Friend 6",
      age: "Age 30"
    }
  ]

  return (
    <View>
      <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
          // console.log(element)
          //console.log(item.age)
          return <Text style={style.text}>{item.name} - {item.age}</Text>
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    marginVertical: 20
  }
});

export default ListScreen;