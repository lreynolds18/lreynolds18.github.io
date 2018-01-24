import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class MainNavbar extends Component {

  render() {
    return (
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
    );
  }
}
