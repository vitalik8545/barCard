import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Card = ({img, title}) => (
  <View style={styles.container}>
    <Image style={styles.img} source={{uri: img}} />
    <View style={styles.textWrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    marginLeft: 10,
    color: '#7E7E7E',
  },
  textWrapper: {
    justifyContent: 'center',
  },
});
