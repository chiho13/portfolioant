import React, { Component } from 'react';
import ProfileCard from '../../components/profileCard/profileCard';

export default class Home extends Component {
  render() {
      return (
        <div>
          <ProfileCard title="Bio" details="Anthony is a self taught front end developer"/>
        </div>
      );
    }
}