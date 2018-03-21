import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';

import './Fifth.css';
import Pricing from '../../UI/Pricing/Pricing';

const Fifth = (props) => {
    return (
        <Fade className="Fifth">
            <h1>開始免費體驗，客服優化無價</h1>
            <Container>
                <Pricing
                    title={'免費版'}
                    slogan={'適合起家的個人或小團隊'}
                    cta={'開始體驗'}>
                    <li>Line 帳號 1 組</li>
                    <li>Facebook 帳號 3 組</li>
                    <li>員工人數 1 人</li>
                    <li>聊天人數 200 人</li>
                    <li>上載配額 1 GB</li>
                    <li>基本群發訊息功能</li>
                </Pricing>
                <Pricing
                    title={'專頁版'}
                    slogan={'For the new adventure runners.'}
                    cta={'NTD 3000'}>
                    <li>Line 帳號 3 組</li>
                    <li>Facebook 帳號 3 組</li>
                    <li>員工人數 3 人</li>
                    <li>聊天人數無上限</li>
                    <li>上載配額 5 GB</li>
                    <li>完整群發訊息功能</li>
                </Pricing>
                <Pricing
                    title={'企業版'}
                    slogan={'適合專頁行銷、客服、銷售團隊'}
                    cta={'聯繫我們'}>
                    <li>Line 帳號 4 組</li>
                    <li>Facebook 帳號 8 組</li>
                    <li>員工人數 50 人</li>
                    <li>聊天人數無上限</li>
                    <li>上載配額 100 GB</li>
                    <li>專頁群發訊息功能</li>
                </Pricing>
            </Container>
        </Fade>
    );
};

export default Fifth;
