import React from 'react';

import './SocialMedia.css';
import messenger from '../../../assets/images/icons/Messenger_Icon.png';
import line from '../../../assets/images/icons/LINE_SOCIAL_Circle_typeA.png';

const SocialMedia = () => (
    <div className="SocialMedia">
        <a target="_blank" href="https://www.facebook.com/messages/t/2060370127541965"><img src={messenger} alt="Messenger Icon" /></a>
        <a target="_blank" href="https://line.me/R/ti/p/@ccl3761f" ><img src={line} alt="LINE Icon"/></a>
    </div>
);

export default SocialMedia;
