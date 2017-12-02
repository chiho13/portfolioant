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
                      <p>I am a self-taught Front End Developer with a passion in UI/UX Design and engineering. 
                    I started my career as a freelancer. Understanding the problem of the business and clients is important to deliver the best solution. This includes increasing conversion and saving time for developers.
                    </p>
                   <p> I work in a agile environement with a team consisting of UX Designers and backend developers to create new features on time.</p>
                   <p>My skills are: HTML5, Sass, ES6 Javascript, Gulp, Jasmine Unit Testing, JSP, Jenkins</p>

                    <p>This portfolio is made with React.</p>
                    <br/>
                    <a className="profileCard_contact" href="mailto:a.chiho13@gmail.com">Feel free to email me: a.chiho13@gmail.com</a>
                  </div>
                </div>


            </div>
					</div>
        </div>
      );
    }
}
