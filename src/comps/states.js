import {combineReducers} from 'redux';
import helloState from './hello/helloState';
import routerState from './common/routerState';

export default combineReducers({
	helloState,
	routerState
});

module.exports = exports['default'];
