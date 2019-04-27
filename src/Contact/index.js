import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import ContactButtons from './buttons';
import Resource from '../Resource';

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Segment>
          <p>{ Resource.About.Contact_Message }</p>
          <ContactButtons />
        </Segment>
      </Container>
    );
  }
}
