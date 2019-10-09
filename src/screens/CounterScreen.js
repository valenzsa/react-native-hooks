import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {

  // By default, React does not watch a variable.  There is no automatic detection of some variable changing inside of our component.  Instead use "useState".  React will automatically watch the variable and when we make a change, React will automatically update the content on the screen.
  //let counter = 0;

  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //console.log('Increase Button Pressed')
          //counter++;
          //console.log(counter);

          setCounter(counter + 1);
          console.log(counter);
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          //console.log('Decrease Button Pressed')
          //counter--;
          //console.log(counter);

          setCounter(counter - 1);
          console.log(counter);
        }}
      />

      <Text>Current Count: {counter} </Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default CounterScreen;