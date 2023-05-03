import { useContext, useRef, useState } from 'react'

import Input from '../UI/Input'
import classes from './MealsItemForm.module.css'

const MealsItemForm = (props) =>{
   const amountInputRef = useRef()
   const [amountIsValid,setAmountIsValid] = useState(true)

   
    const submitHandler = (e) =>{
    e.preventDefault();
    //input validation
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
        setAmountIsValid(false)
        return;
    }

    props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
       <Input 
       ref={amountInputRef}
       label="number" 
       input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
       }}
       />
       <button >Add To Cart</button>
       {!amountIsValid && <p>Please enter valid number</p>}
        </form>
    )
}

export default MealsItemForm