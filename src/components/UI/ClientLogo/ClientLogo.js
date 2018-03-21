import React from 'react';
import { Fade, Container } from 'reactstrap';

import './ClientLogo.css';

const ClientLogo = (props) => {
    return (
        <Fade className="ClientLogo">
            <div>
                <img src={props.link}/>
            </div>
        </Fade>
    );
};

export default ClientLogo;
