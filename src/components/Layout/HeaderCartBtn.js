import React, {useEffect, useContext, useState} from "react";
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";
import './HeaderCartBtn.css';

const HeaderCartBtn = props => {
    const [btnIsHigh, setBtnHigh] = useState(false);
    const cartContext = useContext(CartContext);

    const { items } = cartContext;

    const numberOfCartItems = items.reduce((curr, e) => {
        return curr + e.amount;
    }, 0);

    const btnClasses = `header-btn ${btnIsHigh ? 'bump' : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnHigh(true);
        const timer = setTimeout(() => {
            setBtnHigh(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
        
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className='header-btn-icon'><CartIcon /></span>
            <span>{props.title}</span>
            <span className='header-btn-items'>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartBtn;
