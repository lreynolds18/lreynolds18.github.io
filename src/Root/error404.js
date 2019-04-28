import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class RootMenu extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h2">The route requested was not found :(</Header>
      </Container>
    );
  }
}
