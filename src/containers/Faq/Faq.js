import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Chatshier 幫助中心</title>
                </Helmet>
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
                                        <CardTitle>文字客服與電話客服的差別？</CardTitle>
                                        <CardText>文字客服有如使用通訊軟體一樣是用打字進行交流的，
                                        和電話客服的不同的地方，在於使用文字交流可以避免不好意思開口詢問的問題，電話打不通等等問題。
                                        同時現代人大多習慣藉由通訊軟體進行交流， 所以我們也採取相似的方式進行客服。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>使用Chatshier 需要安裝特定軟體嗎？</CardTitle>
                                        <CardText>您並不需要安裝任何軟體，皆可使用各種瀏覽器進入， Chatshier 頁面， 第一次登入時，依照各種通訊軟體完成設定即可使用。<a href="https://medium.com/@chatshier/%E8%A8%8A%E6%81%AF%E4%B8%B2%E6%8E%A5%E8%A8%AD%E5%AE%9A-e112254e25f5" target="_blank">如何串接Line及Facebook服務？</a></CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>標籤功能是什麼？</CardTitle>
                                        <CardText>標籤是一個提供客服人員簡單且更輕易了解顧客的資料、需求等等。

                                        預設標籤20個
                                        姓名、編號、電子郵件、年齡、性別、地區、備註、特性、VIP等級、聊天次數、付費階段......
                                        
                                        自訂標籤
                                        無上限新增標籤項目，含單選、多選、文字</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>群發訊息是什麼？</CardTitle>
                                        <CardText>群發訊息是發送訊息給整個群組或設定的客戶群。
                                            <br/>
                                            <p>客服人員可以設定: </p>
                                            <ul>
                                                <li>發送對象 ─ 全部發送、單一顧客發送</li>
                                                <li>發送時間 ─ 立即發送、設定某一時間發送</li>
                                                <li>發送內容 ─ 設定群發訊息，可以包含文字、圖片、影片、音樂檔</li>
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>自動回覆訊息是什麼？</CardTitle>
                                        <CardText>目前尚無客服人員在線上時，自動回應的訊息。
                                            <br/>
                                            <p>客服人員可以設定: </p>
                                            <ul>
                                                <li>傳送時間 ─ 例如 : 24:00 ~ 08:00</li>
                                                <li>回覆內容 ─ 設定回覆訊息，可以包含文字、圖片、影片、音樂檔</li>
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>關鍵字回覆訊息是什麼？</CardTitle>
                                        <CardText>客戶訊息觸發關鍵字，系統自動回覆訊息

                                        客服人員可以設定
                                        主關鍵字、副關鍵字 ─ 例如 : 你好 
                                        回覆內容 ─ 設定回覆訊息，可以包含文字、圖片、影片、音樂檔</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>加好友回覆訊息是什麼？</CardTitle>
                                        <CardText>客戶加好友時自動回覆的訊息。

                                        客服人員可以設定
                                        回覆內容 ─ 設定回覆訊息，可以包含文字、圖片、影片、音樂檔</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>如何使用Chatshier？</CardTitle>
                                        <CardText>Chatshier 一共支援多款通訊軟體  Facebook、  LINE 等等。
                                        並可以同時設定多個帳號，是個能讓店家與顧客保持緊密聯擊的最佳小工具。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>Chatshier 有支援哪些軟體？</CardTitle>
                                        <CardText>目前 Chatshier 支援多款通訊軟體
                                        Facebook
                                        LINE 
                                        未來將會開發
                                        WeChat</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>手機平板都能聯絡到線上文字客服嗎？</CardTitle>
                                        <CardText>電腦、手機、平板等行動裝置，只要能瀏覽網頁，皆能夠進行線上文字客服。</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>客服人員離線後，顧客的詢問訊息會如何處理？</CardTitle>
                                        <CardText>客服人員可以針對一般問題，可以設定關鍵字回覆 

                                        例如一般旅遊業 : 
                                        顧客 : 請問有日本旅遊的行程嗎? 
                                        客服人員 : 您好，有的，目前有東京五日遊行程，詳細資料如下東京五日遊 
                                        
                                        客服人員也可以設定時段自動回覆 
                                        
                                        例如 : 
                                        顧客 : 請問可以和我聊天嗎? 
                                        客服人員 : 您好，目前並無客服人員在線上。線上文字客服 服務時間: 週一至週五 9:00~21:00，例假日 9:00~18:00。</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Faq;
