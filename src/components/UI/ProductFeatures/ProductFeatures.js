import React from 'react';
import { Fade, Button } from 'reactstrap';

import './ProductFeatures.css';

const ProductFeatures = (props) => {
    return (
        <Fade className="ProductFeatures">
            <div className="content">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <ul>
                    {props.children}
                </ul>
                <div className="button-case">
                    <Button color="info">{props.cta}</Button>
                </div>
            </div>
            <div className="desktop">
                <img src="http://via.placeholder.com/300x195" />
            </div>
        </Fade>
    );
};

export default ProductFeatures;
