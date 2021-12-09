import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.tsx';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/reducers';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

const store = applyMiddleware(thunk, promise)(createStore)(rootReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
