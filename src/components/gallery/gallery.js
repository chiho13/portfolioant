import React, { Component } from 'react';
import './gallery.scss';

import CommercialProjects from './commercialProjects';
import FunProjects from './funProjects';
export default class gallery extends Component {

	render() {
		console.log(this.props.data);
      return (
        <div className="gallery">
            <div className="gallery_container">
									<CommercialProjects />
                  <FunProjects />
            </div>
        </div>
      );
    }
}
