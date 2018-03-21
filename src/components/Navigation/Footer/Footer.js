import React from 'react';
import { Button } from 'reactstrap';

import './Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    
    render() {
        return (
            <div className="Footer">
                <h1>Make your customer<br/> happier with Chatshier.</h1>
                <Button color="info">馬上註冊</Button>{' '}
                <Button color="info">與我們聯繫</Button>{' '}
                <div className="Footer__second">
                    <p><a href="#">服務條款</a>  ·  <a href="#">隱私權條款</a></p>
                    <hr/>
                    <span>©2018 Chatshier All Right Reserved</span>
                </div>
            </div>
        );
    }
}
