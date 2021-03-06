import React from 'react';
import { Fade } from 'reactstrap';

import './ProductFeatures.css';

const ProductFeatures = (props) => {
    const backgroundImage = {
        backgroundImage: 'url(' + `${props.image}` + ')'
    };
    return (
        <Fade className={`ProductFeatures px-2 ${props.title ? '' : 'd-none'}`}>
            <div className="desktop" style={backgroundImage}></div>
            <div className="content">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <ul>
                    {props.children}
                </ul>
                <div className="button-case">
                    <a href="/faq"><div>{props.cta}</div></a>
                </div>
            </div>
        </Fade>
    );
};

export default ProductFeatures;
