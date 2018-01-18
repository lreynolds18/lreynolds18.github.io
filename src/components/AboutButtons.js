import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedinSquare, FaEnvelope } from 'react-icons/lib/fa';

export default class AboutButtons extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button
          bsStyle="primary"
          href="mailto:lreynolds18@gmail.com"
        ><FaEnvelope /> Email</Button>
        <Button
          bsStyle="primary"
          href="https://github.com/lreynolds18"
        ><FaGithubAlt /> Github</Button>
        <Button
          bsStyle="primary"
          href="https://www.linkedin.com/in/lreynolds18/"
        ><FaLinkedinSquare /> Linkedin</Button>
      </ButtonToolbar>
    );
  }
} 
