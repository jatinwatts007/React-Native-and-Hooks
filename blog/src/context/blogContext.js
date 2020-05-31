// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

//export const BlogProvider = ({ children }) => {
// const [blogPosts, dispatch] = useReducer(blogReducer, []);

const addBlogPosts = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blog' });
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
  { addBlogPosts },
  [],
);
// export default BlogContext;
