/* eslint-env commonjs */
/* global process */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const reducer = require('../comps/states');

export function configStore(initialState) {
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({
            collapsed: true
        }));
    }

    const reduxMiddleware = applyMiddleware(...middleware);
    const createStoreWithMiddleware = reduxMiddleware(createStore);
    const store = createStoreWithMiddleware(reducer, initialState);

    if (module.hot) {
		module.hot.accept('../comps/states', () => {
	      const nextReducer = require('../comps/states');
	      store.replaceReducer(nextReducer);
	    });
    }

    return store;
}
