import React from 'react';
import { Button } from 'reactstrap';

import './Footer.css';
import urlConfig from '../../../config/url-config';
// ex: wwww.dev.chatshier.com ->  service.dev.chatshier.com
let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = 'http://' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signupUrl = url + urlConfig.signup;

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return (
            <div className="Footer">
                <h3>Make your customer<br/> happier with Chatshier.</h3>
                <Button outline size="sm" color="info" href={signupUrl}>馬上註冊</Button>{' '}
                <Button outline size="sm" color="info" href="/contact">與我們聯繫</Button>{' '}
                <div className="Footer__second">
                    <p><a href="/terms" target="_blank">服務條款  ·  隱私權條款</a></p>
                    <hr/>
                    <span>©2018 Chatshier All Right Reserved</span>
                </div>
            </div>
        );
    }
}
