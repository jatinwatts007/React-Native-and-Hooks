import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      {name.length < 5 ? (
        <Text>Password must be greater than 4 letters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 50,
    borderColor: 'black',
    borderWidth: 1.5,
  },
});

export default TextScreen;
