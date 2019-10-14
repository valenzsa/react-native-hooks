import React, { useState } from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(`red is ${red}`);
  console.log(`green is ${green}`);
  console.log(`blue is ${blue}`);

  //Helper function
  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15

    // if(color === 'red') {
    //   if(red + change > 255 || red + change < 0 ) {
    //     return;
    //   } else {
    //     setRed(red + change);
    //   }
    // }

    // USING SWITCH STATEMENT
    switch(color) {
      case 'red':
        // if(red + change > 255 || red + change < 0 ) {
        //   return;
        // } else {
        //   setRed(red + change);
        // }
        // return;

        // USING TERNARY OPERATOR
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
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
        }}
        onDecrease={() => {
          // if(red - COLOR_INCREMENT < 255) {
          //   return;
          // }
          //setRed(red - COLOR_INCREMENT)
          // setColor('red', -1 * COLOR_INCREMENT);
          setColor('red', -(COLOR_INCREMENT));
        }}
      />
      <ColorCounter 
        color="Green" 
        onIncrease={() => {
          setColor('green', COLOR_INCREMENT);
        }}  
        onDecrease={() => {
          setColor('green', -(COLOR_INCREMENT));
        }}
      />
      <ColorCounter 
        color="Blue"
        onIncrease={() => {
          setColor('blue', COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor('blue', -(COLOR_INCREMENT));
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