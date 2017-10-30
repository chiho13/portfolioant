import React, { Component } from 'react';
import './Home.scss';
import ProfileCard from '../../components/profileCard/profileCard';
import SkillCard from '../../components/skillCard/skillCard';
import avatar from '../../assets/avatar.jpg';
import smallCover from '../../assets/smallcover.jpg';
import largeCover from '../../assets/largecover.jpg';

export default class Home extends Component {
  render() {
      return (
        <div className="homeContainer">
          <ProfileCard avatarImage={avatar} smallCoverImage={smallCover}  largeCoverImage={largeCover} />
          <SkillCard />
        </div>
      );
    }
}
