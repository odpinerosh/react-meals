/*
    Este componente muestra el mensaje de bienvenida
*/
import React from "react";
import Card from '../UI/Card';
import './MealsSummary.css';

const MealsSummary = () => {

    return (
        <Card cardId='card-summary' className = 'card-box-shadow'>
            <h2 className='summary-h2'>Delicious Food Delivered to You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </Card>
    );

};

export default MealsSummary;