import React, { Component } from 'react';
import ProfileCard from '../../components/profileCard/profileCard';
import avatar from '../../assets/avatar.jpg'

export default class Home extends Component {
  render() {
      return (
        <div>
          <ProfileCard image={avatar} title="Anthony Ho" details="Anthony is a self taught front end developer. He currently works at The Hut Group"/>
        </div>
      );
    }
}
