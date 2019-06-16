import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './header.css'
import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

export default class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="insta" />
          </Link>
          <Link to="/new">
            <img src={camera} alt="insta" />
          </Link>
        </div>
      </header>
    )
  }
}
