import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'mobx-react';
import { useStrict } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router'

import AppContainer from './components/AppContainer';

const browserHistory = createBrowserHistory();

import stores from '../src/Stores/Stores';

const history = syncHistoryWithStore(browserHistory, stores.routingStore);




ReactDOM.render(
    <Provider {... stores}>
        <Router history={history}>
           <AppContainer />
        </Router>
    </Provider>,      
       document.getElementById('root')
);