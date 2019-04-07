import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class RootMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item
          name='about'
        >
          <Link to='/about'>About</Link>
        </Menu.Item>

        <Menu.Item
          name='projects'
        >
          <Link to='/projects'>Projects</Link>
        </Menu.Item>

        <Menu.Item
          name='work'
        >
          <Link to='/work'>Work Experience</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
