import React from 'react';
import { Fade } from 'reactstrap';
import { withDomain } from '../../../helpers/i18ndomain.js';

import './Forth.css';
import ClientLogo from '../../UI/ClientLogo/ClientLogo';
import logo1 from '../../../assets/images/logos/logo_1.png';
import logo2 from '../../../assets/images/logos/logo_2.png';
// import logo3 from '../../../assets/images/logos/logo_3.png';
// import logo4 from '../../../assets/images/logos/logo_4.png';
import logo5 from '../../../assets/images/logos/logo_5.png';
import logo6 from '../../../assets/images/logos/logo_6.png';

const Forth = (props) => {
    let domain = props.i18n.language;
    return (
        <Fade className={`Forth ${'dsdsds' === domain ? 'd-none' : ''}`}>
            <h1>我們的合作夥伴</h1>
            <div className="logos">
                <ClientLogo image={logo1}/>
                <ClientLogo image={logo2}/>
                <ClientLogo image={logo5}/>
                <ClientLogo image={logo6}/>
            </div>
        </Fade>
    );
};

export default withDomain(Forth);
