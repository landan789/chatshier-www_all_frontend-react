import React from 'react';
import { Fade, Button } from 'reactstrap';
import { withDomain } from '../../../helpers/i18ndomain.js';

import './First.css';
import homeBanner from '../../../assets/images/banners/homebanner-by-rawpixel.jpg';
import urlConfig from '../../../config/url-config';

let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = '//' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signupUrl = url + urlConfig.signup;

const First = (props) => {
    return (
        <Fade className="First" style={{backgroundImage: 'url(' + homeBanner + ')'}}>
            <div className="content">
                <h1>
                    <span className="title-line">{props.t('FIRST_TITLE_1')}</span>
                    <span className="title-line">{props.t('FIRST_TITLE_2')}</span>
                    <span className="title-line">{props.t('FIRST_TITLE_3')}</span>
                </h1>
                <p>
                    <span className="desc-line">{props.t('FIRST_DESC_1')}</span>
                    <span className="desc-line">{props.t('FIRST_DESC_2')}</span>
                </p>
                <Button outline className="btndesktopShow" color="info" href={signupUrl}>{props.t('FIRST_BUTTON')}</Button>
                <Button className="btndesktopHide" color="info" href={signupUrl}>{props.t('FIRST_BUTTON')}</Button>
            </div>
            <div className="mask"></div>
        </Fade>
    );
};

export default withDomain(First);
