import React, { Component } from 'react';
import NavLink from "../navLink/navLink";
import './Navheader.scss';
import logoAnt from "../../assets/blueLogo.png";

export default class Navheader extends Component {
   render() {
    return (
      <nav className="navHeader">
        <div className="navHeader_container">
        <img className="navHeader_logo" src={logoAnt} alt="logo"/>
          <ul className="navHeader_groupList">
            <li className="navHeader_listItem"><NavLink to="/">Home</NavLink></li>
            <li className="navHeader_listItem"><NavLink to="/portfolio">Works</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}
