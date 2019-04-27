import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import RootMenu from './menu';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Resume from '../Resume';

export default class Root extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <RootMenu />

            <Route exact path="/" component={About}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </HashRouter>
    );
  }
}
