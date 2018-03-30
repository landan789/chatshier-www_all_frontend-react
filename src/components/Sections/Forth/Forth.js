import React from 'react';
import { Fade } from 'reactstrap';

import './Forth.css';
import ClientLogo from '../../UI/ClientLogo/ClientLogo';

const Forth = (props) => {
    return (
        <Fade className="Forth">
            <h1>我們的合作夥伴</h1>
            <div className="logos">
                <ClientLogo image={'https://www.chatshier.com/image/logo4.png'}/>
                <ClientLogo image={'https://www.chatshier.com/image/applied-arch.png'}/>
                <ClientLogo image={'https://www.chatshier.com/image/logo1.png'}/>
                <ClientLogo image={'https://www.chatshier.com/image/logo2.png'}/>
                <ClientLogo image={'https://www.chatshier.com/image/logo3.png'}/>
                <ClientLogo image={'https://www.chatshier.com/image/richesse.png'}/>
            </div>
        </Fade>
    );
};

export default Forth;
