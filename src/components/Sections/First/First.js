import React from 'react';
import { Fade, Container, Row, Col, Button } from 'reactstrap';

import './First.css';

const First = (props) => {
    return (
        <Fade className="First" style={{backgroundImage: 'url(' + 'https://unsplash.it/1400/799' + ')'}}>
            <Container>
                <Row>
                    <Col>
                        <h1>Chatshier</h1>
                        <p>數據驅動策略<br/>優化客服體驗</p>
                        <Button className="btndesktopShow" color="info">CTA</Button>
                    </Col>
                </Row>
            </Container>
            <Button className="btndesktopHide" color="info">CTA</Button>
        </Fade>
    );
};

export default First;
