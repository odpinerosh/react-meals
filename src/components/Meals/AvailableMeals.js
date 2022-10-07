/*
    Este componente muestra la lista de Comidas disponibles
*/
import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';
import DUMMY_MEALS from "./DummyMeals";
import './AvailableMeals.css';

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(
        meal => <MealItem
                    className='meal-li' 
                    key={meal.id}
                    meal={meal} 
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