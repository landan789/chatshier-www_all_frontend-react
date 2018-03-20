import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';

import './Third.css';
import ProductFeatures from '../../UI/ProductFeatures/ProductFeatures';

const Third = (props) => {
    return (
        <Fade className="Third">
            <div>
                <Row>
                    <Col><h1>Core Features</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <ProductFeatures
                            title={'客服資料訊息分析'}
                            description={'不會寫程式也能建置通訊機器人並客製您要的銷售內容。 機器人也能解決大部分客戶常見的問題。'}
                            cta={'SignUp'}>
                            <li>我是好用的功能一</li>
                            <li>我是好用的功能二</li>
                            <li>我是好用的功能三</li>
                        </ProductFeatures>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductFeatures
                            title={'群發消息'}
                            description={'藉由 Chatshier 群發，您可以對不同喜好的客戶做出分類及標籤，針對他們會喜歡的產品與優惠做出更進準的發送。'}
                            cta={'More'}>
                            <li>我是好用的功能一</li>
                            <li>我是好用的功能二</li>
                            <li>我是好用的功能三</li>
                        </ProductFeatures>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductFeatures
                            title={'分類指派待辦事項'}
                            description={'Chatshier 也結合方便好用的代辦事項管理功能，降低客服追縱的困難度。'}
                            cta={'More'}>
                            <li>我是好用的功能一</li>
                            <li>我是好用的功能二</li>
                            <li>我是好用的功能三</li>
                        </ProductFeatures>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductFeatures
                            title={'自動化流程'}
                            description={'提供客戶進線後自動寫入個人資訊至資料庫。客製化設定問卷，提問並取得客戶資料與喜好。'}
                            cta={'Try Now'}>
                            <li>我是好用的功能一</li>
                            <li>我是好用的功能二</li>
                            <li>我是好用的功能三</li>
                        </ProductFeatures>
                    </Col>
                </Row>
            </div>
        </Fade>
    );
};

export default Third;
