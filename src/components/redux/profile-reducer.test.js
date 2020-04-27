
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
// import React from 'react';

let state = {
  posts: [
    { id: 1, message: "Hello!", likesCounte: 15 },
    { id: 2, message: "how are you!", likesCounte: 20 },
    { id: 3, message: "Very vell!", likesCounte: 18 },
    { id: 4, message: "Wow", likesCounte: 12 }
  ]
};


it("new post.message should be 'it-kama' ", () => {
 
  let action = addPostActionCreator('it-kama')
  let newState = profileReducer(state, action);
  // expect(newState.posts.length).toBe(5);
  expect(newState.posts[4].message).toBe('it-kama');
});

it('new post should be added', () => {

  let action = addPostActionCreator('it-kama')
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it('after delete post.length should be decrement', () => {

  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it('after delete post.length shouldn`t be decrement', () => {

  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});