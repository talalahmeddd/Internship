import { lazy } from 'react';

const CustomerPageConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [{
        path: '/pages/Customers/',
        component: lazy(() =>
            import ('./CustomerPage')),
    }, ],
};

export default CustomerPageConfig;