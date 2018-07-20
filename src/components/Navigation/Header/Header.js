import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { withDomain } from '../../../helpers/i18ndomain.js';
import urlConfig from '../../../config/url-config';
import cookieHelper from '../../../helpers/cookie';

import './Header.css';

// Before we develop the feature for users to upload their own pictures for avatar, we use Chatshier logo as default picture.
import chatshierLogo from '../../../assets/images/logos/user.png';

// ex: wwww.dev.chatshier.com ->  service.dev.chatshier.com
let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
let cookieDomainRange = document.domain.replace(/^[\w-]+\./i, '.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = '//' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signinUrl = url + urlConfig.login;
let signupUrl = url + urlConfig.signup;
let chatUrl = url + urlConfig.chat;

let userName = cookieHelper.get('_chsr_username');

export default withDomain(class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isSignedin: false,
            isOpen: false
        };
        this.signout = this.signout.bind(this);
    }

    componentWillMount() {
        document.title = this.props.t('PRODUCT_NAME');
        let name = cookieHelper.get('_chsr_username');
        let email = cookieHelper.get('_chsr_email');

        let isSignedin = !!(name && email);
        this.setState({ isSignedin: isSignedin });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    signout() {
        cookieHelper.clear('_chsr_username', cookieDomainRange);
        cookieHelper.clear('_chsr_email', cookieDomainRange);
        this.setState({ isSignedin: false });
    }

    render() {
        return (
            <div className="Header">
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">{this.props.t('PRODUCT_NAME')}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/#about">產品特色</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#features">主要功能</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/faq" target="_blank">常見問題</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://medium.com/@chatshier" target="_blank">部落格</NavLink>
                            </NavItem>
                            <NavItem id="chat" className={this.state.isSignedin ? '' : 'hidden'}>
                                <NavLink href={chatUrl}>系統</NavLink>
                            </NavItem>
                            <NavItem className={this.state.isSignedin ? 'hidden' : ''}>
                                <NavLink href={signupUrl}>立即申請</NavLink>
                            </NavItem>
                            <NavItem className={this.state.isSignedin ? 'hidden' : ''}>
                                <NavLink href={signinUrl}>登入</NavLink>
                            </NavItem>
                            <NavItem
                                id="Header__userAvatar"
                                className={this.state.isSignedin ? '' : 'hidden'}>
                                <NavLink>
                                    <UncontrolledDropdown>
                                        <DropdownToggle tag="span">
                                            <div className="Header__userAvatar"><img src={chatshierLogo} alt="userAvatar"/></div>
                                        </DropdownToggle>
                                        <DropdownMenu id="dropdownMenu">
                                            <DropdownItem>Hi, {userName} 您好！</DropdownItem>
                                            <DropdownItem onClick={this.signout}><NavLink href="/">登出</NavLink></DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
});
