import React, { Component } from 'react';
import './profileCard.scss';

export default class ProfileCard extends Component {
	render() {
      return (
        <div className="content">
          <h2>{this.props.title}</h2>
          <p>{this.props.details}</p>
        </div>
      );
    }
}