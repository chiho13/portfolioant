import React, { Component } from 'react';
import './Portfolio.scss';
import Gallery from '../../components/gallery/gallery';

export default class Portfolio extends Component {
  render() {
      return (
        <div className="portfolioContainer">
          <Gallery/>
        </div>
      );
    }
}
