import React, { Component } from 'react';
import { Picture } from 'react-responsive-picture';
import './profileCard.scss';
import emailIcon from '../../assets/email.png';
import graphcms from '../../assets/graphcms.svg';

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
					    {this.props.avatarImage ? <img className="profileCard_avatarImage" src={this.props.avatarImage} alt="anthony"/>: null}
                <div className="profileCard_bioInfoContent">
                  <div className="profileCard_groupBio">
                      <h1 className="profileCard_groupBioName">Anthony Ho</h1>
											<div className="profileCard_pillContainer">
												<a href="mailto:a.chiho13@gmail.com" target="_blank" rel="noopener noreferrer" className="profileCard_groupBioPill"><img src={emailIcon} className="profileCard_workIcon" alt="email"/><span className="profileCard_workplace">Contact</span></a>
											</div>
										</div>
                  <div className="profileCard_bioInfoText">
                      <p>I am a self-taught Front End Developer with a passion in UI/UX Design and engineering.
                    </p>
                   <p> I enjoy creating engaging user experiences and products.  The technologies and tools I use are HTML5, Sass, ES7 Javascript, React, Vue 
                     and GraphQL.</p>
                    <p>Please feel free to contact me</p>
										<br/>
										<br/>
                    <p>This portfolio is made with React + GraphQL + GraphCMS</p>
										<br/>
										<img className="graphCMS" src={graphcms} alt="powered by GraphCMS" />
                  </div>
                </div>
            </div>
					</div>
        </div>
      );
    }
}
