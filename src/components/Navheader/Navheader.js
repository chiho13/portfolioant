import React, { Component } from 'react';
import NavLink from "../navLink/navLink";
import './Navheader.scss';
import logoAnt from "../../assets/logoant.png";

export default class Navheader extends Component {
   render() {
    return (
      <nav className="navHeader">
        <div className="navHeader_container">
        <img className="navHeader_logo" src={logoAnt}/>
        <div className="navHeader_developerWrapper">
          <h1 className="navHeader_developer">Anthony Ho</h1>
          <h2 className="navHeader_developerTitle">Front End Developer</h2>
        </div>
          <ul className="navHeader_groupList">
            <li className="navHeader_listItem"><NavLink to="/">Home</NavLink></li>
            <li className="navHeader_listItem"><NavLink to="/portfolio">Portfolio</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}


