import React, { Component } from 'react';
import './gallery.scss';
import glossy from '../../assets/glossy.png';
import beautyprofile from '../../assets/beautyprofile.png';
import ugc from '../../assets/ugc.png';
import espamap from '../../assets/espamap.png';
import illammap from '../../assets/blackandwhite.png';
import chalkboard from '../../assets/chalkboard.png';
import pomodoro from '../../assets/pomodoro.png';

export default class gallery extends Component {
	render() {
      return (
        <div className="gallery">
            <div className="gallery_container">
              <h2>Commercial</h2>
              <div className="gallery_previewMain">
                  <a href="https://www.glossybox.co.uk" target="_blank" className="gallery_previewMainItem">
                    <img className="gallery_previewMainImage" src={glossy} />
                    <h3>Glossybox site build</h3>
                    <p>Team Site build for acquisition</p>
                    <p>Reused global widgets for landing page</p>
                  </a>
                  <a href="https://www.glossybox.co.uk/beauty.profile" target="_blank" className="gallery_previewMainItem">
                    <img className="gallery_previewMainImage" src={beautyprofile} />
                    <h3>Beauty Profile</h3>
                    <p>Transitioned component from adaptive to responsive and refactored javascript from validation</p>
                  </a>
                  <a href="https://www.illamasqua.com" target="_blank" className="gallery_previewMainItem">
                   <img className="gallery_previewMainImage" src={ugc} />
                   <h3>User Generated Content from Instagram</h3>
                    <p>Feature built for Illamasqua acquisition</p>
                    <p>This has a thumbnail and popup slider for users to see content</p>
                  </a>
                   <a href="https://www.illamasqua.com/store.locate" target="_blank" className="gallery_previewMainItem">
                    <img className="gallery_previewMainImage" src={illammap} />
                    <h3>Store locator Component</h3>
                    <p>Responsive component built for Illamasqua acquisition</p>
                    <p>Users can find store from their current location </p>
                    <p>Users can navigate to location on the search result cards</p>
                  </a>
                  <a href="https://www.espaskincare.com/store.locate" target="_blank" className="gallery_previewMainItem">
                    <img className="gallery_previewMainImage" src={espamap} />
                    <p>Store locator component reused for ESPA skincare acquisition</p>
                  </a>
                  <div className="gallery_previewMainItem gallery_previewMainItem-nohover">
                    <h3>Miscellaneous</h3>
                      <p>New mobile responsive widgets to replace legacy code</p>
                      <p>Typography changes</p>
                      <p>Refactoring code </p>
                      <p>Brand Configs </p>

                  </div>
              </div>

                 <h2>For Fun</h2>
              <div className="gallery_previewMain">
                  <a href="https://codepen.io/ahomnky/full/wGLxzZ" className="gallery_previewMainItem">
                    <img className="gallery_previewMainImage" src={chalkboard} />
                    <h3>Chalkboard</h3>
                    <p>2014 - first project - made with jQuery</p>
                  </a>
                  <a href="https://codepen.io/ahomnky/full/XdLGYR" className="gallery_previewMainItem">
                   <img className="gallery_previewMainImage" src={pomodoro} />
                   <h3>Pomodoro Timer</h3>
                    <p>FreeCodeCamp project </p>
                  </a>
              </div>
            </div>
        </div>
      );
    }
}
