import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail style={style.textStyle} title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={9} />
      <ImageDetail style={style.textStyle} title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={7} />
      <ImageDetail style={style.textStyle} title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={4} />
    </View>
  )
}

const style = StyleSheet.create({ 
  textStyle: {
    color: "#ff0000",
    fontSize: 50
  }
});

export default ImageScreen;