import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
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
                  <img className="skillCard_previewMainImage" src={glossy} />
                  <img className="skillCard_previewMainImage" src={ugc} />
                  <img className="skillCard_previewMainImage" src={espamap} />
              </div>
            </div>
          </Link>
        </div>
      );
    }
}
