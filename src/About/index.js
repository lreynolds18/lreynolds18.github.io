import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import AboutBio from './bio';
import Contact from '../Contact';
import Projects from '../Projects';

import Resume from '../Resume';

export default class About extends Component {
  render() {
    return (
      <Container>
      <Grid>
        <Grid.Row>
          <AboutBio />
        </Grid.Row>

        <Grid.Row>
          <Resume />
        </Grid.Row>

        <Grid.Row>
          <Projects />
        </Grid.Row>

        <Grid.Row>
          <Contact />
        </Grid.Row>
      </Grid>
      </Container>
    );
  }
}
