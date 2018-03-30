import React from 'react';
import { Fade, Button } from 'reactstrap';

import './Article.css';

const Article = (props) => {
    const backgroundImage = {
        backgroundImage: 'url(' + `${props.image}` + ')'
    };
    return (
        <div className="Article">
            
        </div>
    );
};

export default Article;
