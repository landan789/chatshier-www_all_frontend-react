import React from 'react';
import { Fade, Button } from 'reactstrap';

import './BlogPost.css';

const BlogPost = (props) => {
    const backgroundImage = {
        backgroundImage: 'url(' + `${props.image}` + ')'
    };
    return (
        <div className="BlogPost">
            <a href={props.link}>
                <div
                    className="BlogPost__photo"
                    style={backgroundImage}></div>
                <div className="BlogPost__content">
                    <h5>{props.title}</h5>
                    <span>作者： {props.author} | 時間： {props.updatedTime}</span>
                    <p>{props.body}</p>
                </div>
            </a>
        </div>
    );
};

export default BlogPost;
