import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  console.log(props);

  return (
    <View>
      {/* <Image source={require('../../assets/beach.jpg')} /> */}
      <Image source={props.imageSource}/>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "#ffcc00"
  }
});

export default ImageDetail;