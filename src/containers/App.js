import React, {Component} from 'react';
import './App.scss';
import Footer from '../components/footer/footer';
import {Route, Switch} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Photography from './ImageGallery/ImageGallery';

const  Navheader =  React.lazy(() => import('../components/Navheader/Navheader'));


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="appContainer">
                    <React.Suspense fallback={< div > Loading nav ...</div>}>
                        <Navheader/>
                    </React.Suspense>
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
