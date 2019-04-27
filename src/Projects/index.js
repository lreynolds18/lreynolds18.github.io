import React, { Component } from 'react';
import { Container, Image, Label, Segment } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import Resource from '../Resource';

export default class Projects extends Component {
  renderSingleProject(project, index) {
    return (
      <Segment>
        <Label as='a' color='red' ribbon>
          <h3>{ project.title }</h3>
        </Label>
        <span>{ project.date }</span>

        <Segment vertical>
            <p>{ project.stack }</p>
        </Segment>

        
        {project.player.map((vid, idx) =>
          <Segment vertical key={ idx }>
            <ReactPlayer url={ vid } controls />
          </Segment>
        )}

        <Segment vertical>
          {project.overview.map((line, idx) =>
            <p key={ idx }>{ line }</p>
          )}
        </Segment>

        {project.images.map((image, idx) =>
          <Segment vertical key={ idx }>
            <Image src={ image.url } />
            <p>{ image.label }</p>
          </Segment>
        )}
      </Segment>
    );
  }

  render() {
    return (
      <Container>
        <h1>{ Resource.Projects.Title }</h1>

        {Resource.Projects.Projects.map((project, idx) =>
          { return this.renderSingleProject(project, idx) }
        )}
      </Container>      
    );
  }
} 
