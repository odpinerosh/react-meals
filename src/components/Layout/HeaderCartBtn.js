import React from "react";
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";
import './HeaderCartBtn.css';

const HeaderCartBtn = props => {

    const cartContext = React.useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curr, e) => {
        return curr + e.amount;
    }, 0);

    return (
        <button className='header-btn' onClick={props.onClick}>
            <span className='header-btn-icon'><CartIcon /></span>
            <span>{props.title}</span>
            <span className='header-btn-items'>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartBtn;
