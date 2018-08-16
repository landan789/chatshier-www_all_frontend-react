import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import Footer from './components/Navigation/Footer/Footer';
import SocialMedia from './components/Navigation/SocialMedia/SocialMedia';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toolbar/>
                <Home/>
                <Footer />
                <SocialMedia />
            </div>
        );
    }
}

export default App;
