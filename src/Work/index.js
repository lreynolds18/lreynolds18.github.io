import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import resource from '../resource';

export default class Work extends Component {
  render() {
    return (
      <Container>
        <h1>{ resource.Work.Title }</h1>
        <Grid>
          {resource.Work.Jobs.map(function(job, index) {
            return (
              <Grid.Row key={ index }>
                <Grid.Column>
                  <h3>{ job.Company }</h3> 
                  {job.Description.map(function(desc, idx) {
                    return <p key={ idx }>{ desc }</p>;
                  })}
                </Grid.Column>
              </Grid.Row>
            );
          })}
        </Grid>
      </Container>
    );
  }
}
