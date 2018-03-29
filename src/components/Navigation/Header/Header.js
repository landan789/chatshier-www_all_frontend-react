import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';

import './Header.css';

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
                                <NavLink href="/login">登入</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">註冊</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}