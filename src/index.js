import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import Root from './components/Root';
import ChangelogReducer from  './reducers/ChangelogReducer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ChangelogReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
console.log(store.getState());

// console.log(browserHistory);
// console.log( window.location.pathname );

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
