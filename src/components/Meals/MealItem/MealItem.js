import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import './MealItem.css';


const MealItem = props => {

    const price = `$${props.meal.price.toFixed(2)}`;
        
    return (
        <li className='meal-li'>
            <article className='meal-article'>
                <h3 className='meal-name'>{props.meal.name}</h3>
                <div className='meal-description'>{props.meal.description}</div>
                <div className='meal-price'>{price}</div>
            </article>
            <MealItemForm id={props.meal.id}/>
        </li>
    );

}

export  default MealItem;