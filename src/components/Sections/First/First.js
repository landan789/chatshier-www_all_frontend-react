import React from 'react';
import { Fade, Button } from 'reactstrap';
import { translate } from 'react-i18next';

import './First.css';
import homeBanner from '../../../assets/images/banners/homebanner-by-rawpixel.jpg';
import urlConfig from '../../../config/url-config';

let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = 'http://' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signupUrl = url + urlConfig.signup;

const First = (props) => {
    return (
        <Fade className="First" style={{backgroundImage: 'url(' + homeBanner + ')'}}>
            <div className="content">
                <h1>
                    <span className="title-line">{props.t('First.title1')}</span>
                    <span className="title-line">{props.t('First.title2')}</span>
                    <span className="title-line">{props.t('First.title3')}</span>
                </h1>
                <p>
                    <span className="desc-line">{props.t('First.desc1')}</span>
                    <span className="desc-line">{props.t('First.desc2')}</span>
                </p>
                <Button outline className="btndesktopShow" color="info" href={signupUrl}>{props.t('First.button')}</Button>
                <Button className="btndesktopHide" color="info" href={signupUrl}>{props.t('First.button')}</Button>
            </div>
            <div className="mask"></div>
        </Fade>
    );
};

export default translate()(First);
