import React from 'react'
import styles from "./MealItemForm.module.css"
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const inputProps = {
        id: `amount- ${props.id}`,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"


    }
  return (
   <form className={styles.form}>
    <Input label = "Amount" input={inputProps}/>
    <button>+ Add</button>
   </form>
  )
}

export default MealItemForm;