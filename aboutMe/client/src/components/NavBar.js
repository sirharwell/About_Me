import React, { Component } from 'react';
import { Menu, Image, Button, Label, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';



class NavBar extends Component {
  state = {
  }


  render() {
    const { activeItem } = this.state
    return (
      <Menu
        fixed="top"
        size='large'
        pointing
        inverted
      >
      <Menu.Item as='a' href="/" active={activeItem === '/'} >Home</Menu.Item>
      <Menu.Item as='a' href="/" active={activeItem === '/w'}>Work Experience</Menu.Item>
      <Menu.Item as='a' href="/" active={activeItem === '/f'}>Family</Menu.Item>
      <Menu.Item as='a' href="/" active={activeItem === '/i'} >Interests</Menu.Item>
      <Menu.Item as='a' href="/" active={activeItem === '/c'}>Contact Me</Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;
