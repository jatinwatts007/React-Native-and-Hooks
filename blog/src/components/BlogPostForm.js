import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const BlogPostForm = (props) => {
  const [title, setTitle] = useState(props.initialValues.title);
  const [content, setContent] = useState(props.initialValues.content);
  return (
    <View>
      <Text style={style.label}>Enter Title:</Text>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={style.label}>Enter Content:</Text>
      <TextInput
        style={style.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={style.save}
        title="Save"
        onPress={() => props.onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const style = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  save: {
    margin: 50,
    borderWidth: 20,
    borderColor: 'black',
  },
});

export default BlogPostForm;
