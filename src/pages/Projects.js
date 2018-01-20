import React, { Component } from 'react';
import Interactive from 'react-interactive';
import Iframe from 'react-iframe';
import DownloadLink from 'react-download-link';

import ProjectsComponent from '../components/Projects';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectsComponent />
      </div>
    );
  }
}

