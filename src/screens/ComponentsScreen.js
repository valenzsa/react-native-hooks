import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ComponentScreen = () => {
  const name = 'John Doe';

  return (
    <View>
      <Text style={styles.heading}>Hello World!</Text>
      <Text style={styles.subheading}>This is {name}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: "#ff0000"
  },
  subheading: {
    fontSize: 20
  }
});

export default ComponentScreen;