import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory}  from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import {configStore} from '../utils/configStore';
import styles from '../statics/css/app.css';

const store = configStore();

ReactDOM.render(	
    <Provider store={store}>
        <Router history={browserHistory} routes={routes(store)} />
    </Provider>,
    document.getElementById('root')
);