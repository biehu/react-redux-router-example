import React from 'react';
import {fetchNewComponent} from '../common/routerState';

const Route = {
    path: 'tab',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));

        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('./tab').default);
                    resolve();
                });
            });
        }

        Promise.all([
            fetchComponent()
        ]).then(
            () => dispatch(fetchNewComponent(false))
        );
    }
};

export default Route;
