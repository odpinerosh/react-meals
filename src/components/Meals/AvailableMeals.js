/*
    Este componente muestra la lista de Comidas disponibles
*/
import React from "react";
import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';
import DUMMY_MEALS from "./DummyMeals";
import './AvailableMeals.css';

const AvailableMeals = () => {
     const mealsList = DUMMY_MEALS.map(
        meal => <MealItem
                    key={meal.id}
                    className='meal-li' 
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                />
    );

    return (
        <Card cardId='card-meals-list'>
            <ul className='meals-ulist'>
                {mealsList}
            </ul>
        </Card>
        
    );

};


export default AvailableMeals;