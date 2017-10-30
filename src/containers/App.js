import React, { Component } from 'react';
import './App.scss';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Navheader from '../components/Navheader/Navheader';
import Footer from '../components/footer/footer';
import {Route, Switch, Link} from 'react-router-dom';

class App extends Component {
   render() {
    return (
      <div className="appContainer">
        <Navheader/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
