import React from 'react';
import { withDomain } from '../../../helpers/i18ndomain.js';

import './SocialMedia.css';
import messenger from '../../../assets/images/icons/Messenger_Icon.png';
import line from '../../../assets/images/icons/LINE_SOCIAL_Circle_typeA.png';

const SocialMedia = (props) => (
    <div className="SocialMedia">
        <a target="_blank" href={`https://www.messenger.com/t/${props.t('FACEBOOK.ID')}`}><img src={messenger} alt="Messenger Icon" /></a>
        <a target="_blank" href={`https://line.me/R/ti/p/${props.t('LINE.ID')}`} ><img src={line} alt="LINE Icon"/></a>
    </div>
);

export default withDomain(SocialMedia);
