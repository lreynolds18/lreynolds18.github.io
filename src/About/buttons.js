import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Button
          color='google plus'
          href='mailto:lreynolds18@gmail.com'
        ><IoIosMail /> Email</Button>
        <Button
          color='grey'
          href='https://github.com/lreynolds18'
        ><IoLogoGithub /> Github</Button>
        <Button
          color='linkedin'
          href='https://www.linkedin.com/in/lreynolds18/'
        ><IoLogoLinkedin /> Linkedin</Button>
      </div>
    );
  }
}
