import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailalableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m1",
      name: "Barbecue Burger",
      description: "American , raw , meaty",
      price: 12.99,
    },
  ];
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id = {meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        key={meal.id}
      />
    );
  });
  return (
    <section className={classes.meal}>
        <Card>
        <ul>{mealsList}</ul>    
        </Card>
      
    </section>
  );
};

export default AvailalableMeals;
