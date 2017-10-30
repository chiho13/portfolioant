import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
import './skillCard.scss';


export default class SkillCard extends Component {
	render() {
      return (
        <div className="skillCard">
            <div className="skillCard_container">
              <h2> Skills</h2>

                <p>HTML</p>
                <p>SASS</p>
                <p>Javascript</p>
            </div>
        </div>
      );
    }
}
