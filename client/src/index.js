import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux' // The <Provider> component makes the store available to other React components
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';
import './index.css';

// Create an unique store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
