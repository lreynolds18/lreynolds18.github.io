import React, { Component, createRef } from 'react';
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react';

import Contact from '../Contact';
import Resource from '../Resource';

export default class Bio extends Component {
  render() {
    return (
      <Container>
          <Header as='h1'>{ Resource.About.Title }</Header>

          <Grid columns={ 2 } divided>
            <Grid.Row>
              <Grid.Column>
                <Image src={ Resource.About.Image_Link } alt={ Resource.About.Image_Alt } size='large' circular />
              </Grid.Column>

              <Grid.Column>
                <h3>{ Resource.About.Header }</h3>
                <p>{ Resource.About.Summary }</p>
                <Contact />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    );
  }
}
