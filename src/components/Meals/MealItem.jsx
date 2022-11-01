import React from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './mealItem/MealItemForm'


const MealItem = (props) => {
  const newPrice = props.price.toFixed(2)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{newPrice}</p>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  )
}

export default MealItem;