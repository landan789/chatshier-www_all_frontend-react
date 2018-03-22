import React from 'react';
import { Fade, Container } from 'reactstrap';

import './ClientLogo.css';

const ClientLogo = (props) => {
    const backgroundImage = {
        backgroundImage: 'url(' + `${props.image}` + ')'
    };
    return (
        <Fade className="ClientLogo">
            <div style={backgroundImage}></div>
        </Fade>
    );
};

export default ClientLogo;
