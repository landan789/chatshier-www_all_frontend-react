import React from 'react';
import Aux from 'react-aux';

import './Toolbar.css';
import Header from '../Header/Header';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="Toolbar center">
                <Header/>
            </div>
        );
    }
}

export default Toolbar;
