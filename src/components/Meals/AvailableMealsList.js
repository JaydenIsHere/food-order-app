import MealsItem from '../MealsItem/MealsItem';
import Card from '../UI/Card';
import classes from './AvailableMealsList.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMealsList = () =>{
    
    return (
      <section claaName={classes.meals}>
        <Card>
        <ul>
        {
          DUMMY_MEALS.map(meal =>(
            <MealsItem name={meal.name} description={meal.description} price={meal.price} key={meal.id} id={meal.id}/>
          ))
        }
        </ul>
        </Card>
      </section>
    )
  }

  export default AvailableMealsList