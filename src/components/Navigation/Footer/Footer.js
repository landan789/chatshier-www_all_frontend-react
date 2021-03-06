import React from 'react';
import { Button } from 'reactstrap';
import { withDomain } from '../../../helpers/i18ndomain.js';
import cookieHelper from '../../../helpers/cookie';

import './Footer.css';
import urlConfig from '../../../config/url-config';
// ex: wwww.dev.chatshier.com ->  service.dev.chatshier.com
// TODO React Component will not have this method
let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = '//' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signupUrl = url + urlConfig.signup;

export default withDomain(class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedin: false,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    componentWillMount() {
        let name = cookieHelper.get('_chsr_username');
        let email = cookieHelper.get('_chsr_email');

        let isSignedin = !!(name && email);
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
                <h3>{this.props.t('FOOTER_TITLE')}</h3>
                <Button outline
                    size="sm"
                    color="info"
                    href={signupUrl}
                    className={this.state.isSignedin ? 'hidden' : ''}>立即申請</Button>{' '}
                <Button outline size="sm" color="info" href="https://chatshier.typeform.com/to/c7Q8yS" target="_blank">與我們聯繫</Button>
                <p className="mt-3 font-weight-bold">
                    <i class="fas fa-map-marker-alt"></i><span> 台北市信義區信義路四段415號9樓-8</span>
                </p>
                <p className="mt-3 font-weight-bold">
                    <i class="fas fa-envelope"></i><span> {this.props.t('SUPPORT_EMAIL')}</span>
                </p>    
                <p className="mt-3 font-weight-bold">
                    <i class="fas fa-phone"></i><span> 02-27583626</span>
                </p>                
                <div className="Footer__second">
                    <p>
                        <a href="/terms" target="_blank">服務條款</a>
                        <span>  ·  </span>
                        <a href="/privacy" target="_blank">隱私權條款</a>
                    </p>
                    <hr/>
                    <span>©2018 {this.props.t('PRODUCT_NAME')} All Right Reserved</span>
                </div>
            </div>
        );
    }
});
