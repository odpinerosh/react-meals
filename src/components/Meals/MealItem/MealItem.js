import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import './MealItem.css';


const MealItem = props => {
    const cartCntx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount => {
        cartCntx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };
    return (
        <li className='meal-li'>
            <article className='meal-article'>
                <h3 className='meal-name'>{props.name}</h3>
                <div className='meal-description'>{props.description}</div>
                <div className='meal-price'>{price}</div>
            </article>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </li>
    );

}

export  default MealItem;