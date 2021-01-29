import React, { Component } from 'react';
import Axios from 'axios';
import Card from './card.js';

class Content extends Component {

    state = {
        cards: []
    };

    url = "https://jsonplaceholder.typicode.com/todos";

    componentDidMount(){
        Axios.get(this.url)
        .then( response => { 
            const cards = response.data;
            this.setState({ cards })
            //console.log(response.data) 
        })
    }
    //
    render(){
        return(
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        <Card
                            data = { this.state }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;