import React, { Component } from 'react';
import './profileCard.scss';

export default class ProfileCard extends Component {
	render() {
      return (
        <div className="profileCard_content">
					<div className="profileCard_content_container">
					{this.props.image ? <div><img className="profileCard_image" src={this.props.image}/></div> : null}
					<div>
          {this.props.title ? <h2>{this.props.title}</h2> : null }
          {this.props.details ? <p>{this.props.details}</p> : null }
					</div>
					</div>
        </div>
      );
    }
}
