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
                <h1><span className="title-line">錢掌櫃 Chatshier</span>  <span className="title-line">多社群</span><span className="title-line">整合平台</span></h1>
                <p><span className="desc-line">數位整合行銷及</span><span className="desc-line">客服應用最佳選擇</span></p>
                <Button outline className="btndesktopShow" color="info" href={signupUrl}>立即申請</Button>
                <Button className="btndesktopHide" color="info" href={signupUrl}>立即申請</Button>
            </div>
            <div className="mask"></div>
        </Fade>
    );
};

export default First;
