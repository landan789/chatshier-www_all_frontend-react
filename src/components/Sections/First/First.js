import React from 'react';
import { Fade, Button } from 'reactstrap';

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
                <h1>錢掌櫃 Chatshier 多社群整合平台</h1>
                <p>數位整合行銷及客服應用最佳選擇</p>
                <Button outline className="btndesktopShow" color="info" href={signupUrl}>立即申請</Button>
                <Button className="btndesktopHide" color="info" href={signupUrl}>立即申請</Button>
            </div>
            <div className="mask"></div>
        </Fade>
    );
};

export default First;
