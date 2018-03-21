import React from 'react';
import { Fade, Container } from 'reactstrap';

import './Forth.css';
import ClientLogo from '../../UI/ClientLogo/ClientLogo';

const Forth = (props) => {
    return (
        <Fade className="Forth">
            <h1>我們的合作夥伴</h1>
            <div className="logos">
                <ClientLogo link={'../../../assets/images/logos/logo1.png'}/>
                <ClientLogo/>
                <ClientLogo/>
                <ClientLogo/>
                <ClientLogo/>
            </div>
        </Fade>
    );
};

export default Forth;
