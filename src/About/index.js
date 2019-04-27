import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import Contact from '../Contact';
import Projects from '../Projects';
import Resource from '../Resource';
import Resume from '../Resume';

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>{ Resource.About.Title }</h1>
          <Grid columns={2} divided>
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

        <Resume />
        <Projects />
        <Contact />
      </div>
    );
  }
}
