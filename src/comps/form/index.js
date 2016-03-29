import React from 'react';
import {fetchNewComponent} from '../routerState';

const Route = {
    path: 'form',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));

        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('./form').default);
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
