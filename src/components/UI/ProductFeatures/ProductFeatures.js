import React from 'react';
import { Fade, Button } from 'reactstrap';

import './ProductFeatures.css';

const ProductFeatures = (props) => {
    const backgroundImage = {
        backgroundImage: 'url(' + `${props.image}` + ')'
    };
    return (
        <Fade className="ProductFeatures">
            <div className="desktop" style={backgroundImage}></div>
            <div className="content">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <ul>
                    {props.children}
                </ul>
                <div className="button-case">
                    <Button outline size="sm" color="info">{props.cta}</Button>
                </div>
            </div>
        </Fade>
    );
};

export default ProductFeatures;
