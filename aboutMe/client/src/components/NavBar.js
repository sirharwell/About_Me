import React, { Component } from 'react';
import { Menu, Image, Button, Label, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  state = {
    activeItem: this.props.location.pathname,
    notifications: this.props.user_notifications,
    unread: this.props.unread,
  }


  render() {
    const { activeItem } = this.state
    return (
      <Menu
        fixed="top"
        stackable
        size='large'
        pointing
      >
        </Link>
        <Menu.Item as='a' href="/" active={activeItem === '/'} >Home</Menu.Item>
        <Menu.Item as='a' href="/" active={activeItem === '/'}>I need...</Menu.Item>
        <Menu.Item as='a' href="/" active={activeItem === '/'}>Jobs</Menu.Item>
          { this.rightNavs() }
        </Menu>
    )
  }
}

export default withRouter(connect(NavBar));
