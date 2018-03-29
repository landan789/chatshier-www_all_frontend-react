import React from 'react';

import './Toolbar.css';
import Header from '../Header/Header';
import SocialMedia from '../SocialMedia/SocialMedia';

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
                <SocialMedia/>
            </div>
        );
    }
}

export default Toolbar;
