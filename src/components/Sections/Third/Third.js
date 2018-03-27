import React from 'react';
import { Fade } from 'reactstrap';

import './Third.css';
import ProductFeatures from '../../UI/ProductFeatures/ProductFeatures';
import channelImg from '../../../assets/images/banners/channels-by-ryoji-iwata.jpg';
import platformImg from '../../../assets/images/banners/platform-tim-bennett.jpg';
import taskImg from '../../../assets/images/banners/task-by-kelly-sikkema.jpg';
import dataImg from '../../../assets/images/banners/data-by-olu-eletu.jpg';

const Third = (props) => {
    return (
        <Fade className="Third" id="features">
            <h1>提升客服效能</h1>
            <div className="features">
                <ProductFeatures
                    title={'整合客服工作站'}
                    description={'接入Facebook、Line、Wechat 等通訊平台，讓Chatshier 成為你客服唯一的工作台。'}
                    cta={'了解更多'}
                    image={platformImg}>
                    <li>跨平台訊息不露接，減輕客服運營負擔</li>
                    <li>機器人即時接洽，客戶體驗零時差</li>
                    <li>內部溝通功能，客服專員無縫協作</li>
                </ProductFeatures>
                <ProductFeatures
                    title={'群發管理功能'}
                    description={'藉由 Chatshier 群發，您可以對不同喜好的客戶做出分類及標籤，針對他們會喜歡的產品與優惠做出更進準的發送。'}
                    cta={'設定方式'}
                    image={channelImg}>
                    <li>建立各個機器人自動回覆訊息</li>
                    <li>分類用戶發送訊息，打造分眾管理行銷策略</li>
                    <li>減少真人客服溝通成本</li>
                </ProductFeatures>
                <ProductFeatures
                    title={'任務待辦功能'}
                    description={'Chatshier 任務待辦管理功能，降低客服追縱的困難度。'}
                    cta={'了解更多'}
                    image={taskImg}>
                    <li>在線聊天即可新增</li>
                    <li>任務排程追蹤</li>
                    <li>整和Google 日曆</li>
                </ProductFeatures>
                <ProductFeatures
                    title={'報表數據功能'}
                    description={'深入了解客戶訊息，洞察對話關鍵，以數據驅動行銷客服策略。'}
                    cta={'了解更多'}
                    image={dataImg}>
                    <li>分析關鍵活躍時段</li>
                    <li>即時數據觀察</li>
                </ProductFeatures>
            </div>
        </Fade>
    );
};

export default Third;
