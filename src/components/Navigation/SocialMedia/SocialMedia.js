import React from 'react';

import './SocialMedia.css';
import messenger from '../../../assets/images/icons/Messenger_Icon.png';
import line from '../../../assets/images/icons/LINE_SOCIAL_Circle_typeA.png';

class SocialMedia extends React.Component {

    render() {
        return (
            <div className="SocialMedia">
                <a target="_blank" href="https://www.facebook.com/messages/t/530755163926878"><img src={messenger} alt="Messenger Icon" /></a>
                <a target="_blank" href="https://line.me/R/ti/p/@xrk4497o" ><img src={line} alt="LINE Icon"/></a>
            </div>
        );
    }
}

export default SocialMedia;
