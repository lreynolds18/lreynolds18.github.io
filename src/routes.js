import React from 'react';
// import { Route, Switch } from 'react-router-dom'

import App from './pages/App';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import PageNotFound from './pages/PageNotFound';

export default (
  <Route exact path="/" component={About}>
    <Route path="/about" component={About} />
    <Route path="/work-experience" component={Work} />
    <Route path="/projects" component={Projects} />
    <Route component={PageNotFound} />
  </Route>
);
