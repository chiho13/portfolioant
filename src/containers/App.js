import React, { Component } from 'react';
import './App.scss';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Photography from './ImageGallery/ImageGallery';
import Navheader from '../components/Navheader/Navheader';
import Footer from '../components/footer/footer';
import {Route, Switch, Link} from 'react-router-dom';
import PageShell from '../components/pageshell/pageshell';

class App extends Component {
   render() {
    return (
      <div className="appContainer">
        <Navheader/>
          <Switch>
          <Route exact path="/" component={PageShell(Home)}/>
          <Route path="/portfolio" component={PageShell(Portfolio)}/>
           <Route path="/photography" component={PageShell(Photography)}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
