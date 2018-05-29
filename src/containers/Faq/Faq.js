import React, { Component } from 'react';
import Aux from 'react-aux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { withDomain } from '../../helpers/i18ndomain.js';
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
        document.title = `${this.props.t('PRODUCT_NAME')} 幫助中心`;
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
                    <div><h1>常見問題</h1></div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                            關於{this.props.t('PRODUCT_NAME')}
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
                                        <CardTitle>{this.props.t('ABOUT_TITLE_1')}</CardTitle>
                                        <CardText>{this.props.t('ABOUT_DESC_1')}</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('ABOUT_TITLE_2')}</CardTitle>
                                        <CardText>{this.props.t('ABOUT_DESC_2_1')}<a href="https://medium.com/@chatshier/%E8%A8%8A%E6%81%AF%E4%B8%B2%E6%8E%A5%E8%A8%AD%E5%AE%9A-e112254e25f5" target="_blank">{this.props.t('ABOUT_DESC_2_2')}</a></CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('FEATURE_TITLE_1')}</CardTitle>
                                        <CardText>{this.props.t('FEATURE_DESC_1')}</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('FEATURE_TITLE_2')}</CardTitle>
                                        <CardText>{this.props.t('FEATURE_DESC_2')}</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('FEATURE_TITLE_3')}</CardTitle>
                                        <CardText>{this.props.t('FEATURE_DESC_3')}</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('FEATURE_TITLE_4')}</CardTitle>
                                        <CardText>{this.props.t('FEATURE_DESC_4')}</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('FEATURE_TITLE_5')}</CardTitle>
                                        <CardText>{this.props.t('FEATURE_DESC_5')}</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('PRODUCTSERVICE_TITLE_1')}</CardTitle>
                                        <CardText>{this.props.t('PRODUCTSERVICE_DESC_1')}</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('PRODUCTSERVICE_TITLE_2')}</CardTitle>
                                        <CardText>{this.props.t('PRODUCTSERVICE_DESC_2')}</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('PRODUCTSERVICE_TITLE_3')}</CardTitle>
                                        <CardText>{this.props.t('PRODUCTSERVICE_DESC_3')}</CardText>
                                    </Card>
                                </Col>
                                <Col sm="6" className="col_margin">
                                    <Card body>
                                        <CardTitle>{this.props.t('PRODUCTSERVICE_TITLE_4')}</CardTitle>
                                        <CardText>{this.props.t('PRODUCTSERVICE_DESC_4')}</CardText>
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

export default withDomain(Faq);
