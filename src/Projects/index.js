import React, { Component } from 'react';
import { Container, Grid, Header, Image, Label, List, Segment } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import Resource from '../Resource';

export default class Projects extends Component {
  renderSingleProject(project, index) {
    return (
      <Segment key={ index }>
        <Label as='a' color='red' ribbon>
          <h3>{ project.Title }</h3>
        </Label>
        <span>{ project.Start_Date } - { project.End_Date }</span>

        <Segment vertical>
            <p>{ project.Stack }</p>
        </Segment>

        <Grid>
          {project.Player.map((vid, idx) =>
            <Grid.Row centered key={ idx}>
              <Segment vertical>
                <ReactPlayer url={ vid } controls centered />
              </Segment>
            </Grid.Row>
          )}
        </Grid>

        <Segment vertical>
          <List as='ul'>
            {project.Overview.map((desc, idx) =>
              <List.Item as='li' key={ idx }>{ desc }</List.Item>
            )}
          </List>
        </Segment>

        {project.Images.map((image, idx) =>
          <Segment vertical textAlign='center' key={ idx }>
            <Image src={ image.Url } size='large' centered />
            <p>{ image.Label }</p>
          </Segment>
        )}
      </Segment>
    );
  }

  render() {
    return (
      <Container>
        <Header as='h1'>{ Resource.Projects.Title }</Header>

        {Resource.Projects.Projects.map((project, idx) =>
          { return this.renderSingleProject(project, idx) }
        )}
      </Container>      
    );
  }
} 
