import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';

import './Second.css';

import messageIcon from '../../../assets/images/icons/home-message.svg';
import chatbotIcon from '../../../assets/images/icons/home-thought.svg';
import dataIcon from '../../../assets/images/icons/home-projection.svg';

const Second = (props) => {
    return (
        <Fade className="Second" id="about">
            <Container>
                <h1>What you will <br/>find out with
                    Chatshier?</h1>
                <Row>
                    <Col className="small-features">
                        <div className="small-feature">
                            <div className="icon"><img src={messageIcon}/></div>
                            <div className="small-feature__text">
                                <h5>多平台整合</h5>
                                <p>導入Facebook、Line、WeChat 對話訊息，在線即時生成用戶資訊。</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={chatbotIcon}/></div>
                            <div className="small-feature__text">
                                <h5>聊天機器人Chatbot</h5>
                                <p>一站式客服通訊機器人，減少多平台管理程序，提高客服效率。</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={dataIcon}/></div>
                            <div className="small-feature__text">
                                <h5>數據驅動客服策略</h5>
                                <p>藉由 Chatshier 整合數據分析工具，精準優化售前及售後客服體驗。</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
};

export default Second;
