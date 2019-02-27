import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import gamePlayReducer from './reducers/gamePlayReducer'
import { Provider } from 'react-redux'

const store = createStore(gamePlayReducer)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    
    document.getElementById('root'));

