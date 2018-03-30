import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import Footer from './components/Navigation/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toolbar/>
                <Home/>
                <Footer />
            </div>
        );
    }
}

export default App;
