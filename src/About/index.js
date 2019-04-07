import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import Projects from '../Projects';
import AboutButtons from './buttons';
import resource from '../resource';

export default class About extends Component {
  render() {
    const imageLink = './mexico.jpg';

    return (
      <Container>
        <h1>{ resource.About.Title }</h1>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src={ imageLink } alt={ resource.About.ImageAlt } size='large' circular />
            </Grid.Column>

            <Grid.Column>
              <h3>{ resource.About.Header1 }</h3>
              <p>{ resource.About.Header2 }</p>
              <p>{ resource.About.Header3 }</p>
              <AboutButtons />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <br />

        <Projects />
      </Container>
    );
  }
}
