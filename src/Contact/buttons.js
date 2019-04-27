import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import Resource from '../Resource';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Button
          color='google plus'
          href={ Resource.About.Email_Url }
        ><IoIosMail /> Email</Button>
        <Button
          color='grey'
          href={ Resource.About.Github_Url }
        ><IoLogoGithub /> Github</Button>
        <Button
          color='linkedin'
          href={ Resource.About.Linkedin_Url }
        ><IoLogoLinkedin /> Linkedin</Button>
      </div>
    );
  }
}
