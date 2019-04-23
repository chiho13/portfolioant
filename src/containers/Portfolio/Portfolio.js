import React, { Component } from 'react';
import './Portfolio.scss';
const Gallery = React.lazy(() => import('../../components/gallery/gallery'));

export default class Portfolio extends Component {
  render() {
      return (
        <div className="portfolioContainer">
          <React.Suspense fallback={<div>loading...</div>} >
            <Gallery/>
          </React.Suspense>
        </div>
      );
    }
}
