import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse, UncontrolledDropdown, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import urlConfig from '../../../config/url-config';

import './Header.css';

// Before we develop the feature for users to upload their own pictures for avatar, we use Chatshier logo as default picture.
import chatshierLogo from '../../../assets/images/logos/chatshier_logo.png';

// ex: wwww.dev.chatshier.com ->  service.dev.chatshier.com
let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = 'http://' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signinUrl = url + urlConfig.login;
let signupUrl = url + urlConfig.signup;
let chatUrl = url + urlConfig.chat;

const getCookie = (name) => {
    let cookieValues = '; ' + document.cookie;
    let parts = cookieValues.split('; ' + name + '=');

    if (parts.length >= 2) {
        return unescape(decodeURIComponent(parts.pop().split(';').shift()));
    }
    return '';
};

let userName = getCookie('_chsr_username');

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isSignedin: false,
            isOpen: false
        };
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
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="Header">
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Chatshier</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/#about">關於我們</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#features">功能</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/faq" target="_blank">問與答</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://medium.com/@chatshier" target="_blank">論壇</NavLink>
                            </NavItem>
                            <NavItem id="chat" className={this.state.isSignedin ? '' : 'hidden'}>
                                <NavLink href={chatUrl}>系統</NavLink>
                            </NavItem>
                            <NavItem className={this.state.isSignedin ? 'hidden' : ''}>
                                <NavLink href={signinUrl}>登入</NavLink>
                            </NavItem>
                            <NavItem className={this.state.isSignedin ? 'hidden' : ''}>
                                <NavLink href={signupUrl}>註冊</NavLink>
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
                                            <DropdownItem>登出</DropdownItem>
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
}
