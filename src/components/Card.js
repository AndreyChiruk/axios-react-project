import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                 <h3>{this.props.first_name + " " + this.props.last_name}</h3>
                <p>{"Email: " + this.props.email}</p>
                <img src={this.props.avatar}/>
            </div>
        )
    }
}

export default Card;