import React from 'react';
import { Fade, Button } from 'reactstrap';

import './First.css';
import homeBanner from '../../../assets/images/banners/homebanner-by-rawpixel.jpg';
const First = (props) => {
    return (
        <Fade className="First" style={{backgroundImage: 'url(' + homeBanner + ')'}}>
            <div className="content">
                <h1>Chatshier</h1>
                <p>數據驅動策略<br/>優化客服體驗</p>
                <Button outline className="btndesktopShow" color="info">免費體驗</Button>
                <Button className="btndesktopHide" color="info">免費體驗</Button>
            </div>
            <div className="mask"></div>
        </Fade>
    );
};

export default First;
