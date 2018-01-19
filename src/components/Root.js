import React from 'react';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import App          from '../pages/App';
import About        from '../pages/About';
import Projects     from '../pages/Projects';
import Work         from '../pages/Work';
import PageNotFound from '../pages/PageNotFound';

const Root = ({store, history}) => ( 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about/:filter?" component={About} />
            <Route path="/work-experience" component={Work} />
            <Route path="/projects" component={Projects} />
            <Route component={PageNotFound} />
          </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);

export default Root;
