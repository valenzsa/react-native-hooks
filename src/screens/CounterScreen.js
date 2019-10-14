import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {

  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button
        title="Increase"
        style={styles.btnText}
        onPress={() => {
          console.log('Increase')
          setCounter(counter + 1)
        }}
      />

      <Button
        title="Decrease"
        style={styles.btnText}
        onPress={() => {
          console.log('Decrease')
          setCounter(counter -1)
        }}
      />

      <Text style={styles.btnText}>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btnText: {
    color: "#ff0000",
    textAlign: "center"
  }
});

export default CounterScreen;