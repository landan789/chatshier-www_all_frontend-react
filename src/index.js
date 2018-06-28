import React from 'react';
import Aux from 'react-aux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from './config/route';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Faq from './containers/Faq/Faq';
import Blog from './containers/Blog/Blog';
import Terms from './containers/Terms/Terms';
import Contact from './containers/Contact/Contact';
import Privacy from './containers/Privacy/Privacy';
import MetaElements from './components/Meta/Meta';

import './helpers/i18ndomain';
import './helpers/google_analytics';

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
    },
    {
        path: ROUTES.TERMS,
        component: Terms,
        exact: true
    },
    {
        path: ROUTES.PRIVACY,
        component: Privacy,
        exact: true
    },
    {
        path: ROUTES.CONTACT,
        component: Contact,
        exact: true
    }
];

ReactDOM.render(
    <Aux>
        <MetaElements />
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
        </BrowserRouter>
    </Aux>,
    document.getElementById('root'));
registerServiceWorker();
