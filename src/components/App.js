import React from 'react';
import Interactive from 'react-interactive';
import { Link, Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactGA from 'react-ga';

import s from '../styles/app.style';

ReactGA.initialize('UA-103151343-1');

function logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export default function App() {

  return (
    <div>
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Hi - I'm Lucas Reynolds</Link>
            </Navbar.Brand>
        </Navbar.Header>

        <Nav>
            <NavItem href="/about" eventKey={1}>About</NavItem>
            <NavItem href="/work-experience" eventKey={2}>Work Experience</NavItem>
            <NavItem href="/projects" eventKey={3}>Projects</NavItem>
        </Nav>
      </Navbar>

      {/*
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work-experience">Work Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>    
      */}

      <Grid>
        <Row>
          <Col xs={1} md={1}></Col>
          <Col xs={9} md={9}>
            <Switch>
              <Route exact path="/" component={About} onUpdate={logPageView} />
              <Route exact path="/about" component={About} onUpdate={logPageView} />
              <Route path="/work-experience" component={Work} onUpdate={logPageView} />
              <Route path="/projects" component={Projects} onUpdate={logPageView} />
              <Route component={PageNotFound} onUpdate={logPageView} />
            </Switch>
          </Col>
          <Col xs={1} md={1}></Col>
        </Row>
        <Row>
          <Col xs={12} style={{ height : "100px"}}></Col>
        </Row>
      </Grid>
    </div>

  );
}
