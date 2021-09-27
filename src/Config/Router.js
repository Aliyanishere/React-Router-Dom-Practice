import { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';

export default class RoutingApp extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Router>
        );
    };
};