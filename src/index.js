import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
// import { Route, Link, Switch } from 'react-router';

import { Route, Link, Switch } from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import Interactive from 'react-interactive';
import { Grid, Row, Col, Navbar, Nav, NavItem, Button, ButtonToolbar } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedinSquare, FaEnvelope } from 'react-icons/lib/fa';



import Blog from       './reducers/BlogPostReducer';
import OpenSource from './reducers/OpenSourceReducer';
import Talks from      './reducers/TalksReducer';
import Resume from     './reducers/ResumeReducer';
import Timeline from   './reducers/TimelineReducer';

import PageNotFound from './containers/PageNotFound';
import About from './containers/About';
import Work from './containers/Work';
import Projects from './containers/Projects';
// import App from './components/App';

import s from './styles/app.style';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        Blog,
        OpenSource,
        Talks,
        Resume,
        Timeline,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Lucas Reynolds</Link>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <NavItem href="/?p=about" eventKey={1}>About</NavItem>
            <NavItem href="/?p=work-experience" eventKey={2}>Work Experience</NavItem>
            <NavItem href="/?p=projects" eventKey={3}>Projects</NavItem>
          </Nav>


        </Navbar>

        <Grid>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={9} md={9}>
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/work-experience" component={Work} />
                <Route path="/projects" component={Projects} />
                <Route component={PageNotFound} />
              </Switch>
            </Col>
            <Col xs={1} md={1}></Col>
          </Row>
          <Row>
            <Col xs={12} style={{ height : "100px"}}></Col>
          </Row>
        </Grid>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
