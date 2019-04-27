import React, { Component } from 'react';

import Education from './education';
import Jobs from './jobs';


export default class Work extends Component {
  render() {
    return (
      <div>
        <Jobs />
        <br />
        <Education />
      </div>
    );
  }
}
