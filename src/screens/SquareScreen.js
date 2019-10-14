import React, { useState } from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(`red is ${red}`);

  return (
    <View>
      <ColorCounter 
        color="Red" 
        onIncrease={() => {
          setRed(red + COLOR_INCREMENT)
          console.log(red);
        }}
        onDecrease={() => {
          setRed(red - COLOR_INCREMENT)
          console.log(red);
        }}
      />
      <ColorCounter 
        color="Green" 
        onIncrease={() => {
          setGreen(green + COLOR_INCREMENT);
          console.log(green);
        }}  
        onDecrease={() => {
          setGreen(green - COLOR_INCREMENT);
          console.log(green);
        }}
      />
      <ColorCounter 
        color="Blue"
        onIncrease={() => {
          setBlue(blue + COLOR_INCREMENT);
          console.log(blue);
        }}
        onDecrease={() => {
          setBlue(blue - COLOR_INCREMENT);
          console.log(blue);
        }}
      />
      <View style={
          {
            width: 100, 
            height: 100, 
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
          }
        } 
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default SquareScreen;