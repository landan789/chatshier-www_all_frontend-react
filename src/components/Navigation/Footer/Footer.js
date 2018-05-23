import React from 'react';
import { Button } from 'reactstrap';
import { translate } from 'react-i18next';

import './Footer.css';
import urlConfig from '../../../config/url-config';
// ex: wwww.dev.chatshier.com ->  service.dev.chatshier.com
let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = 'http://' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signupUrl = url + urlConfig.signup;

let isDsdsds = serviceUrl.includes('dsdsds.com.tw');
let product = isDsdsds ? '凍蒜小精靈' : '錢掌櫃';

const getCookie = (name) => {
    let cookieValues = '; ' + document.cookie;
    let parts = cookieValues.split('; ' + name + '=');

    if (parts.length >= 2) {
        return unescape(decodeURIComponent(parts.pop().split(';').shift()));
    }
    return '';
};

export default translate()(class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedin: false,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    componentWillMount() {
        let name = getCookie('_chsr_username');
        let email = getCookie('_chsr_email');

        let isSignedin = !!(name && email);
        console.log('isSignedin: ' + isSignedin);
        this.setState({ isSignedin: isSignedin });
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="Footer">
                <h3>{this.props.t('Footer.title')}</h3>
                <Button outline
                    size="sm"
                    color="info"
                    href={signupUrl}
                    className={this.state.isSignedin ? 'hidden' : ''}>立即申請</Button>{' '}
                <Button outline size="sm" color="info" href="https://chatshier.typeform.com/to/c7Q8yS" target="_blank">與我們聯繫</Button>{' '}
                <div className="Footer__second">
                    <p>
                        <a href="/terms" target="_blank">服務條款</a>
                        <span>  ·  </span>
                        <a href="/privacy" target="_blank">隱私權條款</a>
                    </p>
                    <hr/>
                    <p>
                        <span>地址 : 台北市信義區信義路四段415號9樓</span>
                    </p>
                    <span>©2018 {product} All Right Reserved</span>
                </div>
            </div>
        );
    }
});
