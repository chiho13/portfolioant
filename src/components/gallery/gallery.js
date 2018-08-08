import React, { Component } from 'react';
import './gallery.scss';
import ExpandableWidget from '../expandableWidget/expandableWidget';
import chalkboard from '../../assets/chalkboard.png';
import pomodoro from '../../assets/pomodoro.png';
import youtube from '../../assets/youtube.png';
import CommercialProjects from './commercialProjects';
export default class gallery extends Component {

	render() {
		console.log(this.props.data);
      return (
        <div className="gallery">
            <div className="gallery_container">
              <h2>Commercial Projects</h2>
									<CommercialProjects />

                 <h2>For Fun</h2>
              <div className="gallery_previewMain">
                   <ExpandableWidget imageSrc={chalkboard}
                                    widgetTitle="Chalkboard"
                                    externalLink="https://codepen.io/ahomnky/full/wGLxzZ"
                                    widgetDescription="2014 - Simple drawing app made with HTML5 canvas and jQuery"
                                    buttonText="Demo"/>

                  <ExpandableWidget imageSrc={pomodoro}
                                    widgetTitle="Pomodoro Timer"
                                    externalLink="https://codepen.io/ahomnky/full/XdLGYR"
                                    widgetDescription="A FreeCodeCamp project"
                                    buttonText="Demo"/>

                  <ExpandableWidget imageSrc={youtube}
                                    widgetTitle="Youtube Video Player"
                                    externalLink="/youtube-search"
                                    widgetDescription="A simple video search and player via youtube API.?Made with React"
                                    buttonText="Demo"/>
              </div>
            </div>
        </div>
      );
    }
}
