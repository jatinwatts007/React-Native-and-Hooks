import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../components/blogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPosts } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id'),
  );
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPosts(navigation.getParam('id'), title, content, () =>
          navigation.pop(),
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
