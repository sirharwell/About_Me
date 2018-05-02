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
        stackable
        size='large'
        pointing
        inverted
      >
        <Menu.Item as='a' href="/" active={activeItem === '/'} >Home</Menu.Item>
        <Menu.Item as='a' href="/" active={activeItem === '/'}>I need...</Menu.Item>
        <Menu.Item as='a' href="/" active={activeItem === '/'}>Jobs</Menu.Item>
        </Menu>
    )
  }
}

export default NavBar;
