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
                                <Input type="email" name="text" id="exampleEmail" placeholder="(必填)" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="請輸入有效Email" />
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
