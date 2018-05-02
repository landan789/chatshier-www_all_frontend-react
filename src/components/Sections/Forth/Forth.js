import React from 'react';
import { Fade } from 'reactstrap';

import './Forth.css';
import ClientLogo from '../../UI/ClientLogo/ClientLogo';
import logo1 from '../../../assets/images/logos/logo_1.png';
import logo2 from '../../../assets/images/logos/logo_2.png';
import logo3 from '../../../assets/images/logos/logo_3.png';
import logo4 from '../../../assets/images/logos/logo_4.png';
import logo5 from '../../../assets/images/logos/logo_5.png';
import logo6 from '../../../assets/images/logos/logo_6.png';


const Forth = (props) => {
    return (
        <Fade className="Forth">
            <h1>我們的合作夥伴</h1>
            <div className="logos">
                <ClientLogo image={logo1}/>
                <ClientLogo image={logo2}/>
                <ClientLogo image={logo3}/>
                <ClientLogo image={logo4}/>
                <ClientLogo image={logo5}/>
                <ClientLogo image={logo6}/>
            </div>
        </Fade>
    );
};

export default Forth;
