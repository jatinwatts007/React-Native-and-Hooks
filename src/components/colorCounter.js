import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const ColorCounter = (props) => {
  return (
    <>
      <Text>{props.color}</Text>
      <Button
        title={`increase ${props.color}`}
        onPress={() => {
          props.onIncrease();
        }}
      />
      <Button
        title={`decrease ${props.color}`}
        onPress={() => {
          props.onDecrease();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
