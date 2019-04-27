import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class RootMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item name='about'>
          <Link to='/about'>About</Link>
        </Menu.Item>

        <Menu.Item name='resume'>
          <Link to='/resume'>Resume</Link>
        </Menu.Item>
 
        <Menu.Item name='projects'>
          <Link to='/projects'>Projects</Link>
        </Menu.Item>

        <Menu.Item name='contact'>
          <Link to='/contact'>Contact</Link>
        </Menu.Item>
     </Menu>
    );
  }
}
