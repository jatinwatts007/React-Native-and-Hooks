import React, { useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../components/blogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPosts } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
