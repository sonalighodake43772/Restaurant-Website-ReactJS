import React from "react";
import MealItem from "./MealItem";
import classes from './MealList.module.css';

const dummy_meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german speciality!",
    price: 16.55,
  },
  {
    id: "m3",
    name: "Barbeque Burger",
    description: "American,raw,meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy... and..green",
    price: 18.33,
  },
  {
    id: "m5",
    name: "Garlic Breadstick",
    description: "Fluffy and buttery",
    price: 14.33,
  },
];
const MealList = () => {
  const meallist = dummy_meals.map((meals) => (
    <MealItem
    id={meals.id}
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return(
    <div className={classes.meals}>
    <ul>{meallist}</ul>
    </div>
  );
  
};
export default MealList;
