import React from 'react';
import { Button } from 'reactstrap';

import './Footer.css';

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
                <Button outline size="sm" color="info">馬上註冊</Button>{' '}
                <Button outline size="sm" color="info">與我們聯繫</Button>{' '}
                <div className="Footer__second">
                    <p><a href="/terms">服務條款  ·  隱私權條款</a></p>
                    <hr/>
                    <span>©2018 Chatshier All Right Reserved</span>
                </div>
            </div>
        );
    }
}
