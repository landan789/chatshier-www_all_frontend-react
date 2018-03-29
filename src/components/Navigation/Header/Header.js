import React from 'react';
import cookie from 'react-cookie';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import urlConfig from '../../../config/url-config';

import './Header.css';

// ex: wwww.dev.chatshier.com ->  service.dev.chatshier.com
let serviceUrl = urlConfig.serviceUrl ? urlConfig.serviceUrl : document.domain.replace(/^[\w-]+\./i, 'service.').replace(/:\d+$/i, '');
serviceUrl += urlConfig.port ? ':' + urlConfig.port : '';

urlConfig.serviceUrl = urlConfig.serviceUrl.replace(/^https?:\/\//i, '');
let url = 'http://' + (urlConfig.serviceUrl ? (urlConfig.serviceUrl + (!urlConfig.port ? '' : ':' + urlConfig.port)) : serviceUrl);
let signinUrl = url + urlConfig.signin;
let signupUrl = url + urlConfig.signup;
let chatUrl = url + urlConfig.chat;

// let name = cookie.load('name');
// let email = cookie.load('email');

// if ('' !== name && '' !== email) {
//     document.getElementById('#login').addClass('hidden');
//     document.getElementById('#nav-signup').addClass('hidden');
//     document.getElementById('#chat').removeClass('hidden');
//     document.getElementById('#dropdown-user').removeClass('hidden');
//     document.getElementById('#name').html('');
//     document.getElementById('#email').html('');
//     document.getElementById('#name').html(name);
//     document.getElementById('#email').html(email);
// } else {
//     document.getElementById('#login').removeClass('hidden');
//     document.getElementById('#nav-signup').removeClass('hidden');
//     document.getElementById('#chat').addClass('hidden');
//     document.getElementById('#dropdown-user').addClass('hidden');
// }

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
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
                            <NavItem>
                                <NavLink id="chat" href={chatUrl}>系統</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id="signin" href={signinUrl}>登入</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id="signup" href={signupUrl}>註冊</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
