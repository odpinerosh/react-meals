import React from "react";
import './Header.css';
import mealsImage from '../../assets/meals.jpeg';

const Header = props => {

    return (
        <>
            <header className='header'>
                <h1 className='header-h1'>ReactMeals</h1>
                <button className="header-btn">To Cart</button>
            </header>
            <div className="header-img-cont">
                <img src={mealsImage} alt='Table of React meals' />
            </div>
        </>
        
    );

}


export default Header;