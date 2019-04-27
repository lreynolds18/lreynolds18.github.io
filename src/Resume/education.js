import React, { Component } from 'react';
import { Container, Grid, Label, Segment } from 'semantic-ui-react';

import Resource from '../Resource';

export default class Education extends Component {
  render() {
    return (
      <Container>
        <h1>{ Resource.Education.Title }</h1>
        <Grid>
          {Resource.Education.Degrees.map(function(degree, index) {
            return (
              <Grid.Row key={ index }>
                <Grid.Column>
                  <Segment>
                    <Label as='a' color='red' ribbon>
                      <h3>{ degree.University_Name }</h3>
                    </Label>
                    <span><strong>{ degree.College_Name }</strong>, { degree.Degree_Type } in { degree.Degree_Name }</span>

                    <Segment vertical>
                      <p>{ degree.Honors } -- { degree.GPA }</p>
                    </Segment>

                    <Segment vertical>
                      <p>{ degree.Courses.join(", ") }</p>
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
