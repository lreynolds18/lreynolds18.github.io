import React, { Component } from 'react';
import { Container, Grid, Label, List, Segment } from 'semantic-ui-react';

import Resource from '../Resource';

export default class Jobs extends Component {
  render() {
    return (
      <Container>
        <h1>{ Resource.Work.Title }</h1>
        <Grid>
          {Resource.Work.Jobs.map(function(job, index) {
            return (
              <Grid.Row key={ index }>
                <Grid.Column>
                  <Segment>
                    <Label as='a' color='red' ribbon>
                      <h3>{ job.Company }</h3>
                    </Label>
                    <span>{ job.Position }</span>

                    <Segment vertical>
                      <p>{job.Stack.join(", ")}</p>
                    </Segment>

                    <Segment vertical>
                      <List as='ul'>
                        {job.Description.map(function(desc, idx) {
                          return <List.Item as='li' key={ idx }>{ desc }</List.Item>;
                        })}
                      </List>
                    </Segment>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            );
          })}
        </Grid>
      </Container>
    );
  }
}
