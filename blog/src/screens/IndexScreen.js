import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
import { Context } from '../context/blogContext';

const IndexScreen = () => {
  const { state, addBlogPosts } = useContext(Context);
  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add Blog" onPress={addBlogPosts} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
