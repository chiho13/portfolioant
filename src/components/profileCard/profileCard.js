import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
import './profileCard.scss';
import workIcon from '../../assets/work.png';


export default class ProfileCard extends Component {
	render() {
      return (
        <div className="profileCard">
					<div className="profileCard_content_container">
            <div className="profileCard_coverImageContainer">
            <Picture className="profileCard_coverImage"
              sources = {[
                {
                  srcSet: this.props.smallCoverImage,
                  media: "(max-width: 500px)",
                },
                {
                  srcSet: this.props.largeCoverImage,
                }
                ]}
              />
          </div>
            <div className="profileCard_avatarContainer">
					    {this.props.avatarImage ? <img className="profileCard_avatarImage" src={this.props.avatarImage}/>: null}
                <div className="profileCard_bioInfoContent">
                  <div className="profileCard_groupBio">
                      <h1 className="profileCard_groupBioName">Anthony Ho</h1>
                      <div className="profileCard_groupBioWork"><img src={workIcon} className="profileCard_workIcon" /><a href="https://www.thehutgroup.com" className="profileCard_workplace">The Hut Group</a></div>
                    </div>
                  <div className="profileCard_bioInfoText">
                      <p>Anthony Ho is a Front End Developer with a passion in UI/UX Design and engineering. 
                    I am self-taught and started my career as a freelancer. Understanding the problem of the business and clients is important to deliver the best solution. This includes increasing conversion and saving time for developers.
                    </p>
                   <p> At work, I specialise in front end engineering - writing HTML5 for SEO optimisation, mobile responsive components using Sass, ES6 javascript for visual interactions, form validation, ajax etc. </p>

                    <p>This portfolio is made with React.</p>

                    <a href="mailto:a.chiho13@gmail.com">Email: a.chiho13@gmail.com</a>
                  </div>
                </div>
            </div>
					</div>
        </div>
      );
    }
}
