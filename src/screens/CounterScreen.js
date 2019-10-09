import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

  // TODO: Fix This
  //let counter = 0; 
  const [counter, setCounter] = useState(0);


  return (
    <View>
      <Button 
        title="Increase" 
        onPress={() => { 
          //counter++; modifies variable directly 
          //console.log(counter);
          setCounter(counter + 1);
        }} 
      />
      <Button 
        title="Decrease"  
        onPress={() => { 
          //counter--; modifies variable directly
          //console.log(counter);
          setCounter(counter - 1);
        }} 
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default CounterScreen;