import React from 'react';
import { Fade, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

import './Pricing.css';

const Pricing = (props) => {
    return (
        <Fade className="Pricing">
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.slogan}</CardText>
                    <CardText>
                        <ul>
                            {props.children}
                        </ul>
                    </CardText>
                    <Button color="info">{props.cta}</Button>
                </CardBody>
            </Card>  
        </Fade>
    );
};

export default Pricing;
