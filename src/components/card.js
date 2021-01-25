import React, { Component } from 'react';

class Card extends Component {

    card = (props)=>{
        
        return(
            <div className="card card__">
                <img 
                className="card-img-top"
                src="#"
                alt="img"
                />
                <div className="card-body">
                    <p className="card-text"> texto de ejemplo </p>
                </div>
            </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                { this.card() }
            </React.Fragment>
        )
    }
}

export default Card;