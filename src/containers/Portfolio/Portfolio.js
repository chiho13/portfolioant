import React, { Component } from 'react';
import ProfileCard from '../../components/profileCard/profileCard';

export default class Portfolio extends Component {
  render() {
      return (
        <div>
          <ProfileCard title="Portfolio" details="This is my work"/>
        </div>
      );
    }
}