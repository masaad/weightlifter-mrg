import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { weightLifterApp } from './reducers';
import { Container as App } from '../src/components/App/sync';
import registerServiceWorker from './registerServiceWorker';
import '../src/css/index.css';

const store = createStore(weightLifterApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        document.getElementById('root'));
registerServiceWorker();
