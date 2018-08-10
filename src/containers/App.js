import React, { Component } from 'react';
import './App.scss';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Photography from './ImageGallery/ImageGallery';
import Navheader from '../components/Navheader/Navheader';
import Footer from '../components/footer/footer';
import {Route, Switch} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

class App extends Component {
   render() {
    return (
      <HashRouter>
        <div className="appContainer">
          <Navheader/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/photography" component={Photography}/>
            </Switch>
            <Footer/>
            </div>
      </HashRouter>
    )
  }
}

export default App;
