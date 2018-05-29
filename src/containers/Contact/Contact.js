import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withDomain } from '../../helpers/i18ndomain.js';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';

import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            select: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = 'checkbox' === target.type ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('訊息寄送成功，我們將盡快與你聯繫！');
    }
    
    render() {
        return (
            <div className="Contact">
                <Toolbar/>
                <div className="Contact__body">
                    <div className="form">
                        <h3>與我們聯繫</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">姓名</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="(必填)" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="請輸入有效Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">主題</Label>
                                <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                    value={this.state.select}
                                    onChange={this.handleChange}>
                                    <option value="報價詢問">報價詢問</option>
                                    <option value="媒體合作">媒體合作</option>
                                    <option value="網頁回饋">網頁回饋</option>
                                    <option value="技術協助">技術協助</option>
                                    <option value="其他">其他</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">訊息</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    我同意 {this.props.t('PRODUCT_NAME')} <a href="/terms">Service &amp; Terms</a>.
                                </Label>
                            </FormGroup>
                            <Button
                                outline
                                color="info"
                                className="Contact__submit"
                                type="submit"
                                value="Submit">送出</Button>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withDomain(Contact);
