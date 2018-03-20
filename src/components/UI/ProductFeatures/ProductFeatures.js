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
            </div>
            <div className="button-case">
                <Button color="info">{props.cta}</Button>
            </div>
            <div className="mockups">
                <div className="desktop">
                    <img src="http://via.placeholder.com/300x195" />
                </div>
                <div className="mob">
                    <img src="http://via.placeholder.com/70x125" />
                </div>
            </div>
        </Fade>
    );
};

export default ProductFeatures;
