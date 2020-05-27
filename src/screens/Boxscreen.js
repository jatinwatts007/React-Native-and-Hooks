import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box Screen1</Text>
      <Text style={styles.textTwoStyle}>Box Screen2</Text>
      <Text style={styles.textThreeStyle}>Box Screen3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    //margin: 30,
    //alignItems: 'flex-start',
    // flexDirection: 'row',
    height: 500,
    // justifyContent: 'center',
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
    // padding: 15,
    // flexDirection: 'row',
    //flex: 1,
    alignSelf: 'center',
    //margin: 20,
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    // padding: 15,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //margin: 20,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
    // padding: 15,
    // flexDirection: 'row',
    // justifyContent: 'center',
    //margin: 20,
  },
});

export default BoxScreen;
