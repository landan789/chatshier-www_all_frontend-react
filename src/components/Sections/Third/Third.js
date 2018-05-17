import React from 'react';
import { Fade } from 'reactstrap';

import './Third.css';
import ProductFeatures from '../../UI/ProductFeatures/ProductFeatures';
import channelImg from '../../../assets/images/appUI/groupchat.jpg';
import platformImg from '../../../assets/images/appUI/chatroom.jpg';
import taskImg from '../../../assets/images/appUI/todo-list.jpg';
import dataImg from '../../../assets/images/appUI/chart.jpg';

const Third = (props) => {
    return (
        <Fade className="Third" id="features">
            <h1>主要功能</h1>
            <div className="features">
                <ProductFeatures
                    title={'群發管理'}
                    description={'分類不同喜好之客戶並建立標籤，針對同屬性客戶一鍵發送產品訊息。'}
                    cta={'了解更多'}
                    image={channelImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={'一站登入'}
                    description={'於單一平台串接客戶最常用之社群軟體，完美銜接所有客戶資訊，隨時隨地有效同步互動。'}
                    cta={'了解更多'}
                    image={platformImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={'任務待辦'}
                    description={'快速指派及確認待辦事項清單，大幅提升行銷及客服工作效率。'}
                    cta={'了解更多'}
                    image={taskImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={'即時報表'}
                    description={'以數據驅動行銷策略，深入了解即時分析並洞察商機關鍵。'}
                    cta={'了解更多'}
                    image={dataImg}>
                </ProductFeatures>
            </div>
        </Fade>
    );
};

export default Third;
