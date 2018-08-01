import React, { Component } from 'react';
import './gallery.scss';
import ExpandableWidget from '../expandableWidget/expandableWidget';

import glossy from '../../assets/glossy.png';
import beautyprofile from '../../assets/beautyprofile.png';
import ugc from '../../assets/ugc.png';
import espamap from '../../assets/espamap.png';
import illammap from '../../assets/blackandwhite.png';
import chalkboard from '../../assets/chalkboard.png';
import pomodoro from '../../assets/pomodoro.png';
import youtube from '../../assets/youtube.png';
import sys from '../../assets/sys.png';

export default class gallery extends Component {
	render() {
      return (
        <div className="gallery">
            <div className="gallery_container">
              <h2>Commerical Projects</h2>
              <div className="gallery_previewMain">
									<ExpandableWidget imageSrc={sys}
														widgetTitle="Select Your Sample"
														externalLink="https://www.myprotein.com/my.basket"
														widgetDescription="When customers spend over a certain amount, they are able to select a sample or free gift in the basket page before checkout. It went through various iterations over a 5 month period and extensive AB testing.?The project is forecast to generate more revenue through increase incustomer retention and average order value."/>

									<ExpandableWidget imageSrc={espamap}
																widgetTitle="Store locator"
																externalLink="https://www.espaskincare.com/store.locate"
																widgetDescription="A £100m acquisition. This project was challenging, because of the size of feature and tight deadline. I worked closely with UX Designer to ensure user journey flows smoothly with the visual interaction on all device size.?User can able to search for stores from search input or current location as well interacting with markers on the map."/>

									<ExpandableWidget imageSrc={ugc}
							                                    widgetTitle="User Generated Content Social Media"
							                                    externalLink="https://www.illamasqua.com"
							                                    widgetDescription="This component was built for Illamasqua site build. I worked with backend developers to ensure datapoints were requested correctly.?The images are curated from Instagram which show user's makeup art from the products they bought."/>

									<ExpandableWidget imageSrc={glossy}
                                    widgetTitle={"Glossybox site build"}
                                    externalLink={"https://www.glossybox.co.uk"}
                                    widgetDescription="New widgets were created to make site builds like Glossybox faster.?They are also used to replace legacy components on MyProtein, LookFantastic, Zavvi and other sites."/>

                  <ExpandableWidget imageSrc={beautyprofile}
                                    widgetTitle="Beauty Profile Form"
                                    externalLink="https://www.glossybox.co.uk/beauty.profile"
                                    widgetDescription="This component went through a few iterations. I converted the component from adaptive to responsive and refactored the javascript form validation."/>


              </div>

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
