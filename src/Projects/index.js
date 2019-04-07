import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import resource from '../resource';

export default class Projects extends Component {
  renderSingleProject(project, index) {
    return (
      <Grid columns={1} key={index}>
        <Grid.Row>
          <h2>{ project.title }</h2>
          <h4>{ project.date }</h4>
        </Grid.Row>

        <Grid.Row>
          <h3>{ project.stack }</h3>
        </Grid.Row>

        {project.player.map((vid, idx) =>
          <Grid.Row key={idx}>
            <ReactPlayer url={vid} controls />
          </Grid.Row>
        )}

        <Grid.Row>
          {project.overview.map((line, idx) =>
            <p key={idx}>{ line }</p>
          )}
        </Grid.Row>

        {project.images.map((image, idx) =>
          <Grid.Row key={idx}>
            <Image src={image.url} />
            <p>{ image.label }</p>
          </Grid.Row>
        )}
      </Grid>
    );
  }

  render() {
    return (
      <Container>
        <h1>{ resource.Projects.Title }</h1>

        {resource.Projects.Projects.map((project, idx) =>
          { return this.renderSingleProject(project, idx) }
        )}
      </Container>      
    );
  }
} 
