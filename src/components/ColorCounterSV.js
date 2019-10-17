import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounterSV = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button 
        title="Increase"
        onPress={() => {
          console.log('Increase');
          {props.onIncrease()}
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          console.log('Decrease');
          {props.onDecrease()}
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ColorCounterSV;

