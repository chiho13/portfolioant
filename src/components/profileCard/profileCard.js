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
                  <p className="profileCard_bioInfoText">self-taught and always learning</p>
                    <div className="profileCard_groupBio">
                      <img src={workIcon} className="profileCard_workIcon" /><a href="https://thehutgroup.com" className="profileCard_workplace">The Hut Group</a>
                    </div>
                </div>
            </div>
					</div>
        </div>
      );
    }
}
