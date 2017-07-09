import React from 'react';
import Interactive from 'react-interactive';
import { Link, Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import About from './About';
import Work from './Work';
import Projects from './Projects';

import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Hi - I'm Lucas Reynolds</h1>

      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work-experience">Work Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>    

      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route path="/work-experience" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route component={PageNotFound} />
      </Switch>
    </div>

  );
}
