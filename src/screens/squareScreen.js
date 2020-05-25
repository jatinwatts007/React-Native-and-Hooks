import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/colorCounter';
import { ScrollView } from 'react-native-gesture-handler';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  return (
    <ScrollView>
      <ColorCounter
        color="red"
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setRed(green - 1)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setRed(blue - 1)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
