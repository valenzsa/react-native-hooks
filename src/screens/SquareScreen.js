import React, { useState } from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(`red is ${red}`);

  //Helper function
  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15

    if(color === 'red') {
      if(red + change > 255 || red + change < 0 ) {
        return;
      } else {
        setRed(red + change);
      }
    }
  }

  return (
    <View>
      <ColorCounter 
        color="Red" 
        onIncrease={() => {
          // if(red + COLOR_INCREMENT > 255) {
          //   return;
          // }
          //setRed(red + COLOR_INCREMENT)

          setColor('red', COLOR_INCREMENT);
          console.log(red);
        }}
        onDecrease={() => {
          // if(red - COLOR_INCREMENT < 255) {
          //   return;
          // }
          //setRed(red - COLOR_INCREMENT)
          // setColor('red', -1 * COLOR_INCREMENT);
          setColor('red', -(COLOR_INCREMENT));
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