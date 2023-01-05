import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DataReducer from './reducers';

const store = createStore(DataReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
