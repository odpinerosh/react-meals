import React from "react";
import CartIcon from '../Cart/CartIcon';
import './HeaderCartBtn.css';

const HeaderCartBtn = props => {
    return (
        <button className='header-btn'>
            <span className='header-btn-icon'><CartIcon /></span>
            <span>{props.title}</span>
            <span className='header-btn-items'>43</span>
        </button>
    );
};

export default HeaderCartBtn;
