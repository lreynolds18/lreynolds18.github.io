import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import Work from '../Work';

export default class Root extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/work" component={Work}/>
        </div>
      </HashRouter>
    );
  }
}
