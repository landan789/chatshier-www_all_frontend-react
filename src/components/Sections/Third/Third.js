import React from 'react';
import { Fade } from 'reactstrap';
import { withDomain } from '../../../helpers/i18ndomain.js';

import './Third.css';
import ProductFeatures from '../../UI/ProductFeatures/ProductFeatures';
import channelImg from '../../../assets/images/appUI/groupchat.jpg';
import platformImg from '../../../assets/images/appUI/chatroom.jpg';
import taskImg from '../../../assets/images/appUI/todo-list.jpg';
import dataImg from '../../../assets/images/appUI/chart.jpg';
import payImg from '../../../assets/images/appUI/pay.jpg';
import marketingImg from '../../../assets/images/appUI/marketing.jpg';

const Third = (props) => {
    return (
        <Fade className='Third' id='features'>
            <h1>主要功能</h1>
            <div className='features'>
                <ProductFeatures
                    title={props.t('THIRD_TITLE_1')}
                    description={props.t('THIRD_DESC_1')}
                    cta={'了解更多'}
                    image={channelImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={props.t('THIRD_TITLE_2')}
                    description={props.t('THIRD_DESC_2')}
                    cta={'了解更多'}
                    image={platformImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={props.t('THIRD_TITLE_3')}
                    description={props.t('THIRD_DESC_3')}
                    cta={'了解更多'}
                    image={taskImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={props.t('THIRD_TITLE_4')}
                    description={props.t('THIRD_DESC_4')}
                    cta={'了解更多'}
                    image={dataImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={props.t('THIRD_TITLE_5')}
                    description={props.t('THIRD_DESC_5')}
                    cta={'了解更多'}
                    image={payImg}>
                </ProductFeatures>
                <ProductFeatures
                    title={props.t('THIRD_TITLE_6')}
                    description={props.t('THIRD_DESC_6')}
                    cta={'了解更多'}
                    image={marketingImg}>
                </ProductFeatures>
            </div>
        </Fade>
    );
};

export default withDomain(Third);
