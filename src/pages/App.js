import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

import s from '../styles/app.style';
import AppNavbar from '../components/AppNavbar';

export default class App extends Component {

  render() {
    return (
      <div>
        <AppNavbar />

        <Grid>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={9} md={9}>
              {this.props.children}
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
}
