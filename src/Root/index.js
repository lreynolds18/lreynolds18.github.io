import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import About from '../About';
import Contact from '../Contact';
import Error404 from './error404';
import Projects from '../Projects';
import Resume from '../Resume';
import RootMenu from './menu';

export default class Root extends Component {
  render() {
    return (
        <HashRouter>
          <Fragment>
            <RootMenu />

            <Switch>
              <Route exact path="/" component={ About } />
              <Route path="/about" component={ About } />
              <Route path="/resume" component={ Resume } />
              <Route path="/projects" component={ Projects } />
              <Route path="/contact" component={ Contact } />
              <Route component={ Error404 } />
            </Switch>
          </Fragment>
        </HashRouter>
    );
  }
}
