import React, { Component } from 'react';
import First from '../../components/Sections/First/First';

class Faq extends Component {
    state = {
        onScrollMove: false
    }
    onScrollMove = this.onScrollMove.bind(this);

    onScrollMove(){
        console.log('s');
    }

    render() {
        return (
            <div>
                <First />
            </div>
        );
    }
}

export default Faq;
