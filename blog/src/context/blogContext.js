// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blog':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blog':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blog':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

//export const BlogProvider = ({ children }) => {
// const [blogPosts, dispatch] = useReducer(blogReducer, []);

const addBlogPosts = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blog', payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPosts = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blog', payload: id });
  };
};

const editBlogPosts = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blog',
      payload: { title: title, id: id, content: content },
    });
    if (callback) {
      callback();
    }
  };
};
// return (
// <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
//  {children}
//</BlogContext.Provider>
//);
//};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPosts, editBlogPosts },
  [{ title: 'TEST BLOG', content: 'TEST CONTENT', id: 1 }],
);
// export default BlogContext;
