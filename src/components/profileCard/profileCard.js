import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
import './profileCard.scss';
import workIcon from '../../assets/work.png';
import emailIcon from '../../assets/email.png';

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
											<div className="profileCard_pillContainer">
                      	<a href="https://www.thehutgroup.com" target="_blank" className="profileCard_groupBioPill"><img src={workIcon} className="profileCard_workIcon" /><span className="profileCard_workplace">The Hut Group</span></a>
												<a href="mailto:a.chiho13@gmail.com" target="_blank" className="profileCard_groupBioPill"><img src={emailIcon} className="profileCard_workIcon" /><span className="profileCard_workplace">Contact</span></a>
											</div>
										</div>
                  <div className="profileCard_bioInfoText">
                      <p>Anthony Ho is a Front End Developer with a passion in UI/UX Design and engineering.
                    I am self-taught and started my career as a freelancer. Understanding the problem of the business and clients is important to deliver the best solution. This includes increasing conversion and saving time for developers.
                    </p>
                   <p> I work closely with UX Designers and backend engineers to deliver new features for the ecommerce platform. The technologies I use are HTML5, Sass and ES6 Javascript</p>
                    <p>This portfolio is made with React.</p>
                  </div>
                </div>
            </div>
					</div>
        </div>
      );
    }
}
