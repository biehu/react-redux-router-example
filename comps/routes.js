import React from 'react';
import {Route} from 'react-router';
import Index from './common/index';
import Hello from './hello';

const routes = (
	<Route component={Index}>
    	<Route {...Hello} />
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
