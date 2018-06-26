import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';
import { withDomain } from '../../../helpers/i18ndomain.js';

import './Second.css';

import messageIcon from '../../../assets/images/icons/home-message.svg';
import chatbotIcon from '../../../assets/images/icons/home-thought.svg';
import dataIcon from '../../../assets/images/icons/home-projection.svg';

const Second = (props) => {
    return (
        <Fade className="Second" id="about">
            <Container>
                <h1><span className="title-line">{props.t('SECOND_TITLE_1')}</span><span className="title-line">{props.t('SECOND_TITLE_2')}</span></h1>
                <Row>
                    <Col className="small-features">
                        <div className="small-feature">
                            <div className="icon"><img src={messageIcon}/></div>
                            <div className="small-feature__text">
                                <h5>{props.t('SECOND_TITLE_3')}</h5>
                                <p>{props.t('SECOND_DESC_3')}</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={chatbotIcon}/></div>
                            <div className="small-feature__text">
                                <h5>{props.t('SECOND_TITLE_4')}</h5>
                                <p>{props.t('SECOND_DESC_4')}</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={dataIcon}/></div>
                            <div className="small-feature__text">
                                <h5>{props.t('SECOND_TITLE_5')}</h5>
                                <p>{props.t('SECOND_DESC_5')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
};

export default withDomain(Second);
