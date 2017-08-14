import React, { Component } from 'react';
import NavLink from "../navLink/navLink";
import './Navheader.scss';

export default class Navheader extends Component {
   render() {
    return (
      <nav>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
      </nav>
    )
  }
}


