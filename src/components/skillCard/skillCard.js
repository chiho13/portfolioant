import React, { Component } from 'react';
import './skillCard.scss';

export default class SkillCard extends Component {
	render() {
      return (
        <div className="skillCard">
            <div className="skillCard_container">
              <a className="skillCard_cvlink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1QAIibxdjqjbHYJSrInXRD9wu72CKjASkh6Fb9ys_GAQ/edit?usp=sharing">
                Open CV
              </a>
            </div>
        </div>
      );
    }
}
