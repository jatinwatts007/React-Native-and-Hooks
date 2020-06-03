// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

// const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blog':
      return action.payload;
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
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonserver.get('/blogposts');

    dispatch({ type: 'get_blog', payload: response.data });
  };
};

const addBlogPosts = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post('/blogposts', { title, content });
    // dispatch({ type: 'add_blog', payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPosts = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blog', payload: id });
  };
};

const editBlogPosts = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogposts/${id}`, { title, content });
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
  { addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts },
  [],
);
// export default BlogContext;
