import React from 'react';
import {Route, Redirect} from 'react-router';
import Container from './container';
import hello from './hello';
import alert from './alert';
import form from './form';
import start from './start';
import slide from './slide';
import tab from './tab';
import TimerWrap from './timer/timerWrap';
import MenuWrap from './menu/menuWrap';
import SearchWrap from './search/searchWrap';
import ServiceWrap from './service/serviceWrap';

const routes = (
	<Route component={Container}>
		<Redirect from="/" to="/start" />
    	<Route {...hello} />
    	<Route {...alert} />
    	<Route {...form} />
    	<Route {...start} />
    	<Route {...slide} />
    	<Route {...tab} />
		
		<Route path="/timer" component={TimerWrap} />
		<Route path="/menu" component={MenuWrap} />
		<Route path="/search" component={SearchWrap} />
		<Route path="/service" component={ServiceWrap} />
	</Route>
);

function walk(routes, cb) {
    cb(routes);

    if (routes.childRoutes) {
        routes.childRoutes.forEach(route => walk(route, cb));
    }

    return routes;
}

export default (store) => {
    return walk(Route.createRouteFromReactElement(routes), route => {
        let oldOnEnter = route.onEnter || false;
        route.onEnter = (nextState, replaceState, goNext) => {
            // 路由过程中的校验逻辑demo
            if (route.requireAuth && !store.getState().auth.logged) {
                store.dispatch(checkLogin()).then(() => {
                    if (!store.getState().auth.logged) {
//                        replaceState(nextState, '/Login');
						location.href = '/Login';
                    }
                    if (oldOnEnter) {
                        oldOnEnter(nextState, replaceState);
                    }
                    goNext();
                });
            } else {
                if (oldOnEnter) {
                    oldOnEnter(nextState, replaceState);
                }
                goNext();
            }
        };
        route.store = store;
    });
};
