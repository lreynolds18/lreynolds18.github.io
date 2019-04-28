import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Education from './education';
import Jobs from './jobs';

export default class Resume extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Jobs />
          </Grid.Row>
          <Grid.Row>
            <Education />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
