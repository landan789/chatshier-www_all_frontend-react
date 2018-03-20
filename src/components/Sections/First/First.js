import React from 'react';
import { Fade, Container, Row, Col, Button } from 'reactstrap';

import './First.css';

const First = (props) => {
    return (
        <Fade className="First">
            <Container>
                <Row>
                    <Col>
                        <h1>Chatshier</h1>
                        <p>Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. </p>
                        <Button className="desktopShow" color="info">CTA</Button>
                    </Col>
                </Row>
            </Container>
            <Button className="desktopHide" color="info">CTA</Button>
        </Fade>
    );
};

export default First;
