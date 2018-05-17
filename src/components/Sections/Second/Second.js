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
                <h1><span className="title-line">新一代擴散型</span><span className="title-line">行銷客服整合平台</span></h1>
                <Row>
                    <Col className="small-features">
                        <div className="small-feature">
                            <div className="icon"><img src={messageIcon}/></div>
                            <div className="small-feature__text">
                                <h5>多社群平台整合擴散行銷路徑</h5>
                                <p>跨 Facebook、LINE、WeChat ，以高市佔率聊天軟體做擴散性行銷。</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={chatbotIcon}/></div>
                            <div className="small-feature__text">
                                <h5>群發訊息不再亂槍打鳥</h5>
                                <p>企業可分類不同顧客, 針對目標族群預設廣告推播計畫,  讓投放更精準！</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon"><img src={dataIcon}/></div>
                            <div className="small-feature__text">
                                <h5>有效掌握社群顧客名單</h5>
                                <p>以數據及聊天機器人整合追蹤與管理客戶資料，降低成本同時提高行銷轉換率。</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
};

export default Second;
