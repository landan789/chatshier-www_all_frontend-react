import React, { Component } from 'react';
import First from '../../components/Sections/First/First';
import Second from '../../components/Sections/Second/Second';
import Third from '../../components/Sections/Third/Third';
import Forth from '../../components/Sections/Forth/Forth';
import Fifth from '../../components/Sections/Fifth/Fifth';
import classes from './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <First />
                <Second />
                <Third/>
                <Forth/>
            </div>
        );
    }
}

export default Home;
