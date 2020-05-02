import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from "./components/redux/redux-store";

test('renders learn react link', () => {
  // debugger;
  const { getByText } = render
  (
  <BrowserRouter>
    <Provider>
      <App store={store}/>
    </Provider>
  </BrowserRouter>
  );
  const linkElement = getByText(/learn react/i);

  
  expect(linkElement).toBeInTheDocument();
});

