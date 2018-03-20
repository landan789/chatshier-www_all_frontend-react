import React from 'react';
import { Fade, Container } from 'reactstrap';

import './ClientLogo.css';

const ClientLogo = (props) => {
    return (
        <Fade className="ClientLogo">
            <div>
                <img src="http://via.placeholder.com/150x70"/>
            </div>
        </Fade>
    );
};

export default ClientLogo;
