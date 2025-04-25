import React from 'react'
// import MealsSummary from './MealsSummary'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'
import Card from '../UI/Card'

const DUMMY_MEALS=[{
  id:1,
  name: 'Noodle Burger',
  description: 'A burger is a delicious and satisfying sandwich typically made with a juicy',  
  price:40 

},
{
  id:2,
  name: 'Macroni',
  description: 'Macaroni is a type of short, curved pasta that is commonly used in a variety of comforting and flavorful dishes. It’s especially popular in macaroni and cheese, where it’s smothered in creamy, melted cheese sauce',  
  price:180

},
{
  id:3,
  name: 'Margherita Pizza',
  description: 'Margherita Pizza is a classic Italian delight known for its simple yet bold flavors. It features a thin, crispy crust topped with a rich tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.',  
  price:500

},
{
  id:4,
  name: 'Taco',
  description: 'Tacos are a beloved Mexican dish made with a folded or rolled tortilla filled with a variety of savory ingredients.',  
  price:130 
 
}

]
console.log(DUMMY_MEALS)
const AvailableMeals = () => {
  const mealList=DUMMY_MEALS.map((meal)=>(
    <MealItem 
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />
  ))
  return (
   <Card className={classes.meals}>
    <ul>{mealList} </ul>
   </Card>
  )
}

export default AvailableMeals