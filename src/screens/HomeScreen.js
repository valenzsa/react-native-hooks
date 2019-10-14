import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>Hi! There...</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />

      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />

      <Button 
        title="Go to Images Demo"
        onPress={() => navigation.navigate('Images')}
      />

      <Button 
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button  
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />

      <Button  
        title="Go to Square Screen Demo"
        onPress={() => navigation.navigate('Square')}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;