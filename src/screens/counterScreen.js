import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const one = 1;
const reducer = (state, action) => {
  if (action.counterToChange) {
    return { ...state, counter: state.counter + action.amount };
  } else {
    return counter;
  }
};

const CouterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  //const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ counterToChange: 'counter', amount: one });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ counterToChange: 'counter', amount: -1 * one });
        }}
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CouterScreen;
