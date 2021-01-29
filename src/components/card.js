import React, { Component } from 'react';

class Card extends Component {

    card = ()=>{

        var data = this.props.data.cards
        //console.log(data);

        return(
            <React.Fragment> 
                {data.map(card =>{
                    return(
                        <div key={card.id} className="col-md-4">
                            <div className="card card__ mb-4">
                                <img 
                                className="card-img-top"
                                src="#"
                                alt="img"
                                />
                                <div className="card-body">
                                    <p className="card-text"> { card.title } </p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </React.Fragment>
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