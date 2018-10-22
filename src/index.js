import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Blog from './reducers'

const store = createStore(blog)

ReactDOM.render(
    <Provider store={blog}>
    <App />
    </Provider>,
    
    document.getElementById('root'));
serviceWorker.unregister();
