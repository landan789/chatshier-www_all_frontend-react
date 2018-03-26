import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from './config/route';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Faq from './containers/Faq/Faq';
import Blog from './containers/Blog/Blog';

const routes = [
    {
        path: ROUTES.APP,
        component: App,
        exact: true
    },
    {
        path: ROUTES.FAQ,
        component: Faq,
        exact: true
    },
    {
        path: ROUTES.BLOG,
        component: Blog,
        exact: true
    }
];

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {routes.map((route) => (
                <Route key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component} />
            ))}
            <Redirect to={ROUTES.APP}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
