import React, { Component } from 'react';
import './imageGallery.scss';
import Gallery from 'react-photo-gallery';
import { Query } from 'react-apollo';
import myPhotos from '../../queries/photography';

const PhotographySet = () => (
  <Query query={myPhotos}>
  { ({ loading, error, data } ) => {
    if(loading) return <div className="gallery_loadingSpinner"></div>
    if (error) return <h1>Error fetching photos!</h1>
    const photoSet =  data.photographies.map(el => ({src: el.myImages.url}))
    return <Gallery photos={photoSet} width={100} height={100} />
  }}
</Query>
);

export default class ImageGallery extends Component {
 render() {
	  return (
		    <div className="imageGalleryContainer">
	         <PhotographySet/>
	      </div>
	  );
  }
}
