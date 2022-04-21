import React from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import './Header.css';
import mealsImage from '../../assets/meals.jpeg';

const Header = props => {

    return (
        <>
            <header className='header'>
                <h1 className='header-h1'>ReactMeals</h1>
                <HeaderCartBtn title='To Cart'/>
            </header>
            <div className="header-img-cont">
                <img src={mealsImage} alt='Table of React meals' />
            </div>
        </>
        
    );

}


export default Header;