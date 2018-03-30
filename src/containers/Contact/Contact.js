import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';

import './Contact.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    
    render() {
        return (
            <div className="Contact">
                <Toolbar/>
                <div className="Contact__body">
                    <div className="form">
                        <h3>與我們聯繫</h3>
                        <Form>
                            <FormGroup>
                                <Label for="name">姓名</Label>
                                <Input type="input" name="text" id="name" placeholder="(必填)" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="請輸入有效Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">主題</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>報價詢問</option>
                                    <option>媒體合作</option>
                                    <option>網頁回饋</option>
                                    <option>技術協助</option>
                                    <option>其他</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">訊息</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    我同意 Chatshier <a href="/terms">Service &amp; Terms</a>.
                                </Label>
                            </FormGroup>
                            <Button outline color="info" className="Contact__submit">送出</Button>
                        </Form> 
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;
