import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const componentsScreen = () => {
  const greetings = 'My name is Jatin Watts';
  return (
    <View>
      <Text style={styles.textStyles}>Getting started with react native!</Text>
      <Text style={styles.subHead}>{greetings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 45,
  },
  subHead: {
    fontSize: 20,
  },
});
export default componentsScreen;
