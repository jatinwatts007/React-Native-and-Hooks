import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import ResultsList from './resultsList';

const ResultDetails = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.result.image_url }} />
      <Text style={styles.name}>{props.result.name}</Text>
      <Text>
        {props.result.rating} Stars,{props.result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 2,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },
});

export default ResultDetails;
