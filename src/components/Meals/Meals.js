/*
    Este es el componente central, que muestra el Aviso
    y la lista de comidas disponibles
*/
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return (
         <main>
             <MealsSummary />
             <AvailableMeals />
         </main>
    );
}

export default Meals;