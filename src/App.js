import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import db from './data/data'
import About from './component/About'
import Photography from "./component/Photography";
import logo from './logo.svg';

import './App.css';
import Footer from "./component/footer";
import Nav from "./component/Nav";
import {reducer} from "./reducer";
import Slider from "./component/Slider";
import {checkIfMobile} from "./actions/actions";
import Resume from "./component/Resume"
let initialState = {
    content: db.English,
    isEng: true,
    location: "/",
    imgList: db.imgList,
    showImgIndex: 0,
    isShowingImg: false,
    isMobile: window.matchMedia("(max-width: 1000px)").matches,
    isScrollingAllowed:false

};


let store = createStore(reducer, initialState);

class App extends Component {

    constructor(props) {
        super(props);
        window.addEventListener('resize', this.checkIfMobile, false);
    }

    checkIfMobile = () => {
        store.dispatch(checkIfMobile());
    };

    render() {
        return (
            <Provider store={store}>
                <Router >
                    <div className="App">
                        <Nav/>
                        <div className="view">
                            <Route path={"/"} exact component={About}/>
                            <Route path={"/photography"} component={Photography}/>
                            <Route path={"/resume"} component={Resume}/>
                        </div>
                        <Footer/>
                        <Slider/>
                    </div>
                </Router>

            </Provider>
        );
    }
}

export default App;
export {store}
