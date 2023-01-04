import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/reducer';
import thunk from 'redux-thunk';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById("root"));