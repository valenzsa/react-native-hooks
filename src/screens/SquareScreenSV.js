import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounterSV from '../components/ColorCounterSV';

const SquareScreenSV = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounterSV 
        color="Red"
        onIncrease={() => {
          setRed(red + 1);
          console.log(red);
        }}
      />
      <ColorCounterSV 
        color="Green"
        onDecrease={() => {
          setRed(red - 1);
          console.log(red);
        }}
      />
      <ColorCounterSV 
        color="Blue"
      />
      <View 
        style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default SquareScreenSV;