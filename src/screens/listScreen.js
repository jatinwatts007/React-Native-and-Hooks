import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const listScreen = () => {
  const friends = [
    { name: 'friend #1', age: 24 },
    { name: 'friend #2', age: 24 },
    { name: 'friend #3', age: 24 },
    { name: 'friend #4', age: 24 },
    { name: 'friend #5', age: 24 },
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default listScreen;
