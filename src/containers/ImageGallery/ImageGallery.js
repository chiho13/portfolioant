import React, { Component } from 'react';
import './imageGallery.scss';
import Gallery from 'react-photo-gallery';
import bee from '../../assets/photography/bee.jpg';
import beachrocks from '../../assets/photography/beachrocks.jpg';
import skyline from '../../assets/photography/skylinequeens.jpg';
import rockies from '../../assets/photography/lakelouiserockies.jpg';
import kielder from '../../assets/photography/kielder.jpg';
import sunset from '../../assets/photography/holeintherocksunset.jpg';
import phillynight from '../../assets/photography/phillyatnight.jpg';
import localbeach from '../../assets/photography/localbeach.jpg';
import palmtrees from '../../assets/photography/palmtrees.jpg';
import holyisland from '../../assets/photography/holyisland.jpg';
import dusk from '../../assets/photography/dusk.jpg';

// import lightbox from '../../components/lightbox/lightbox';

export default class ImageGallery extends Component {

 render() {
	return (
		<div className="imageGalleryContainer">
	    <Gallery photos={PHOTO_SET} />
	    </div>
	);
    }
}

const PHOTO_SET = [
  {
    src: bee
  },
  {
    src: beachrocks
  },
  {
    src: skyline
  },
  {
    src: rockies
  },
    {
    src: sunset
  },
  {
    src: kielder
  },
  {
    src: palmtrees
  },
  {
    src: holyisland
  },
  {
    src: dusk
  },
   {
    src: localbeach
  },
   {
    src: phillynight
  }
];