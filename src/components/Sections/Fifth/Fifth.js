import React from 'react';
import { Fade, Container, Row, Col } from 'reactstrap';

import './Fifth.css';
import Pricing from '../../UI/Pricing/Pricing';

const Fifth = (props) => {
    return (
        <Fade className="Fifth">
            <h1>Pricing</h1>
            <Container>
                <Pricing
                    title={'Free Plan'}
                    slogan={'For the new adventure runners.'}
                    cta={'Free'}>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                </Pricing>
                <Pricing
                    title={'Business'}
                    slogan={'For the new adventure runners.'}
                    cta={'NTD 3000'}>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                </Pricing>
                <Pricing
                    title={'Premieum'}
                    slogan={'For the new adventure runners.'}
                    cta={'NTD 10,000'}>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                </Pricing>
                <Pricing
                    title={'Customized Plan'}
                    slogan={'For the new adventure runners.'}
                    cta={'Contact Us'}>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                    <li>Curabitur lobortis id lorem id</li>
                </Pricing>
            </Container>
        </Fade>
    );
};

export default Fifth;
