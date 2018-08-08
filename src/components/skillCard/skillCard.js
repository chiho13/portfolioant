import React, { Component } from 'react';
import './skillCard.scss';
import glossy from '../../assets/glossy.png';
import ugc from '../../assets/ugc.png';
import espamap from '../../assets/espamap.png';
import { Link } from 'react-router-dom';


export default class SkillCard extends Component {
	render() {
      return (
        <div className="skillCard">
          <Link to="/portfolio" className="skillCard_link">
            <div className="skillCard_container">
              <div className="skillCard_previewMain">
                  <button className="skillCard_workTitle">Works</button>
                  <img className="skillCard_previewMainImage" src={glossy} alt="glossybox"/>
                  <img className="skillCard_previewMainImage" src={ugc} alt="user generated content"/>
                  <img className="skillCard_previewMainImage" src={espamap} alt="store locator"/>
              </div>
            </div>
          </Link>
        </div>
      );
    }
}
