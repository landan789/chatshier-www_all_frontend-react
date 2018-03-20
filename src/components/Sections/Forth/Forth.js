import React from 'react';
import { Fade, Container } from 'reactstrap';

import './Forth.css';
import ClientLogo from '../../UI/ClientLogo/ClientLogo';

const Forth = (props) => {
    return (
        <Fade className="Forth">
            <h1>Who Loves Our Products</h1>
            <div className="logos">
                <ClientLogo/>
                <ClientLogo/>
                <ClientLogo/>
                <ClientLogo/>
                <ClientLogo/>
            </div>
        </Fade>
    );
};

export default Forth;
