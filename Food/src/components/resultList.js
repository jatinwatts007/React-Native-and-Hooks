import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ResultsList = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
