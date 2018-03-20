import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';

import './Second.css';

const Second = (props) => {
    return (
        <Fade className="Second">
            <Container>
                <Row>
                    <Col>
                        <h1>What you will <br/>find out with
                        Chatshier?</h1>
                        <div className="small-feature">
                            <div className="icon"><img src="http://via.placeholder.com/96x96"/></div>
                            <div className="small-feature__text">
                                <h5>跨平台整合</h5>
                                <p>提供客戶進線後自動寫入個人資訊至資料庫。客製化設定問卷，提問並取得客戶資料與喜好。</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon" onScroll={props.onScroll}><img src="http://via.placeholder.com/96x96"/></div>
                            <div className="small-feature__text">
                                <h5>機器人Chatbot</h5>
                                <p>不會寫程式也能建置通訊機器人並客製您要的銷售內容。 機器人也能解決大部分客戶常見的問題。</p>
                            </div>
                        </div>
                        <div className="small-feature">
                            <div className="icon" onScroll={props.onScroll}><img src="http://via.placeholder.com/96x96"/></div>
                            <div className="small-feature__text">
                                <h5>精準優化客服體驗</h5>
                                <p>藉由 Chatshier 群發，您可以對不同喜好的客戶做出分類及標籤，針對他們會喜歡的產品與優惠做出更進準的發送。</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
};

export default Second;
