import React, { Component } from 'react';
import Aux from 'react-aux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
import './Faq.css';

class Faq extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    componentWillMount() {
        document.title = 'Chatshier 幫助中心';
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Aux>
                <Toolbar/>
                <div className="Faq">
                    <div><h1>Help Center</h1></div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                            關於Chatshier
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                            功能說明
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                            產品與服務
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>文字客服與電話客服之差異？</CardTitle>
                                        <CardText>文字客服如使用通訊軟體般利用文字訊息進行互動， 透過線上文字服務，
                                            客戶較能避免一般客服電話佔線困擾，也更快獲得即時互動的回應。
                                            加上它具有檔案傳送功能，具備更多的便利性。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>使用錢掌櫃 Chatshier 需要安裝特定軟體嗎？</CardTitle>
                                        <CardText>您並不需要安裝任何軟體，錢掌櫃 Chatshier 平台可使用各種瀏覽器。<a href="https://medium.com/@chatshier/%E8%A8%8A%E6%81%AF%E4%B8%B2%E6%8E%A5%E8%A8%AD%E5%AE%9A-e112254e25f5" target="_blank">如何串接Line及Facebook服務？</a></CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>標籤功能是什麼？</CardTitle>
                                        <CardText>標籤為提供平台操作人員簡易新增顧客的資料、需求等等。

                                        預設 20 組標籤，內含姓名、編號、電子郵件、年齡、性別、地區、備註、特性、VIP 等級、聊天次數、付費階段等。
                                        
                                        另外還可新增無上限自訂標籤項目，例如：單選、多選、文字等。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>群發訊息是什麼？</CardTitle>
                                        <CardText>群發訊息是提供平台可以一次發送訊息給特定群組或指定之客戶群。
                                            <br/>
                                            <p>平台提供之群發設定如下：</p>
                                            <ul>
                                                <li>發送對象 ─ 全部發送、單一顧客發送</li>
                                                <li>發送時間 ─ 立即發送、預約發送</li>
                                                <li>發送內容 ─ 文字、圖片、影片及音樂檔</li>
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>自動回覆訊息是什麼？</CardTitle>
                                        <CardText>如無真人客服人員在線上時，平台自動回應的訊息。
                                            <br/>
                                            <p>平台提供之自動回覆訊息設定如下：</p>
                                            <ul>
                                                <li>傳送時間 ─ 例如 : 24:00 ~ 08:00</li>
                                                <li>回覆內容 ─ 文字、圖片、影片及音樂檔</li>
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>關鍵字回覆訊息是什麼？</CardTitle>
                                        <CardText>客戶訊息如觸發預設之關鍵字，平台將自動回覆訊息。
                                            <br/>
                                            <p>平台操作人員可設定主關鍵字、副關鍵字設定如下：</p>
                                            <ul>
                                                <li>你好 回覆內容 ─ 設定回覆訊息，可以包含文字、圖片、影片及音樂檔</li>
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>加好友回覆訊息是什麼？</CardTitle>
                                        <CardText>客戶加好友時自動回覆的訊息。

                                        平台操作人員可以設定回覆內容 ─ 設定回覆訊息，可以包含文字、圖片、影片及音樂檔</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>如何使用錢掌櫃 Chatshier？</CardTitle>
                                        <CardText>錢掌櫃 Chatshier 支援多種社群軟體，如 Facebook、 LINE 等。 可同時設定多組社群帳號，提供企業與顧客保持緊密聯繫之最佳工具。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>錢掌櫃 Chatshier 有支援哪些軟體？</CardTitle>
                                        <CardText>目前錢掌櫃 Chatshier 支援多款通訊軟體 Facebook、LINE 與開發中之 WeChat。</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>手機平板都能聯絡到線上文字客服嗎？</CardTitle>
                                        <CardText>電腦、手機、平板等行動裝置，只要有網路服務，皆能進行線上文字客服。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>客服人員離線後，顧客的詢問訊息會如何處理？</CardTitle>
                                        <CardText>客服人員可以針對一般問題，設定關鍵字回覆。

                                        例如一般旅遊業 :
                                        顧客 : 請問有日本旅遊的行程嗎?
                                        客服人員 : 您好，有的，目前有東京五日遊行程，詳細資料如下東京五日遊

                                        客服人員也可以設定時段自動回覆

                                        例如 : 顧客 : 請問可以和我聊天嗎?
                                        客服人員 : 您好，目前並無客服人員在線上。線上文字客服 服務時間: 週一至週五 9:00~21:00，例假日 9:00~18:00。
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                <Footer />
            </Aux>
        );
    }
}

export default Faq;
