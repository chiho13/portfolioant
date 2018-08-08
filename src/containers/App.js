import React, { Component } from 'react';
import './App.scss';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Photography from './ImageGallery/ImageGallery';
import Navheader from '../components/Navheader/Navheader';
import Footer from '../components/footer/footer';
import {Route, Switch} from 'react-router-dom';
import PageShell from '../components/pageshell/pageshell';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
   render() {
    return (
      <BrowserRouter>
        <div className="appContainer">
          <Navheader/>
            <Switch>
            <Route exact path="/" component={PageShell(Home)}/>
            <Route path="/portfolio" component={PageShell(Portfolio)}/>
            <Route path="/photography" component={PageShell(Photography)}/>
            </Switch>
            <Footer/>
            </div>
      </BrowserRouter>
    )
  }
}

export default App;
