import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

// import routes from './routes';
import { Route, Switch } from 'react-router-dom'

import App from './pages/App';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import PageNotFound from './pages/PageNotFound';

import Blog from       './reducers/BlogPostReducer';
import OpenSource from './reducers/OpenSourceReducer';
import Changelog from  './reducers/ChangelogReducer';
import Talks from      './reducers/TalksReducer';
import Resume from     './reducers/ResumeReducer';
import Timeline from   './reducers/TimelineReducer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        Blog,
        OpenSource,
        // Talks,
        // Resume,
        // Timeline,
        router: routerReducer
    }),
)

// console.log(browserHistory);
// console.log( window.location.pathname );

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/work-experience" component={Work} />
          <Route path="/projects" component={Projects} />
          <Route component={PageNotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
