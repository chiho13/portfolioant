import React, {Component} from 'react';
import './App.scss';
import Footer from '../components/footer/footer';
import {Route, Switch} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

const Navheader = React.lazy(() => import ('../components/Navheader/Navheader'));
const Home = React.lazy(() => import ('./Home/Home'));
const Portfolio = React.lazy(() => import ('./Portfolio/Portfolio'));
const Photography = React.lazy(() => import ('./ImageGallery/ImageGallery'));

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="appContainer">
                    <React.Suspense fallback={< div > Loading nav ...</div>}>
                        <Navheader/>
                    </React.Suspense>
                    <React.Suspense fallback={< div > Loading page ...</div>}>
                        <Switch>

                            <Route exact path="/" component={Home}/>
                            <Route path="/portfolio" component={Portfolio}/>
                            <Route path="/photography" component={Photography}/>

                        </Switch>
                    </React.Suspense>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}

export default App;
