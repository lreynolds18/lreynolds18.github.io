import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

// import { Card } from 'semantic-ui-react';
// import Iframe from 'react-iframe';
import resource from '../resource';

export default class Projects extends Component {
  render() {
    return (
      <Container>      
        <h1>{ resource.Projects.Title }</h1>
      </Container>      
    );
  }
} 
