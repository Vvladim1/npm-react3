import React from 'react';
import dialogsReducer, { sendMessageCreator } from './dialogs-reducer';


let state = {
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are your it-kamasutra?" },
    { id: 3, message: "Yo!!" }
  ]
}

it("new state.messages.message should be 'kama' ", () => {
  let action = sendMessageCreator('kama');
  let newState = dialogsReducer(state, action);
  expect(newState.messages[3].id).toBe(4);
});

it("new state.messages.message should be 'kama' ", () => {
  let action = sendMessageCreator('kama');
  let newState = dialogsReducer(state, action);
  expect(newState.messages[3].message).toBe('kama');
});

it("new state.messages.message should be 'kama' ", () => {
  let action = sendMessageCreator('kama');
  let newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(4);
});