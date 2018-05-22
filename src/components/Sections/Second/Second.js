import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';
import { translate } from 'react-i18next';

import './Second.css';

import messageIcon from '../../../assets/images/icons/home-message.svg';
import chatbotIcon from '../../../assets/images/icons/home-thought.svg';
import dataIcon from '../../../assets/images/icons/home-projection.svg';

const Second = (props) => {
    return (
        <Fade className="Second" id="about">
            <Container>
                <h1><span className="title-line">{props.t('Second.title1')}</span><span className="title-line">{props.t('Second.title2')}</span></h1>
                <Row>
                    <Col className="small-features">
                        <div className="small-feature">
                            <div className="icon"><img src={messageIcon}/></div>
                            <div className="small-feature__text">
                                <h5>{props.t('Second.title3')}</h5>
                                <p>{props.t('Second.desc1')}</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={chatbotIcon}/></div>
                            <div className="small-feature__text">
                                <h5>{props.t('Second.title4')}</h5>
                                <p>{props.t('Second.desc2')}</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={dataIcon}/></div>
                            <div className="small-feature__text">
                                <h5>{props.t('Second.title5')}</h5>
                                <p>{props.t('Second.desc3')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
};

export default translate()(Second);
