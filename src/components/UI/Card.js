import React from "react";
import './Card.css';

const Card = props => {

    return (
        <div  className={`card ${props.className}`} id={props.cardId}>
            {props.children}
        </div>
    );

}

export default Card;
