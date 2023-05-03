import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import classes from './MealsItem.module.css'
import MealsItemForm from './MealsItemForm'

const MealsItem = (props) =>{

    const price = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContext)
    const addToCartHandler = amount =>{
        const cartItems = {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            amount: amount //quantity
        }
        //add to cart array
        cartCtx.addItem(cartItems)
    }
    
    return(
        <li className={classes.meal}> 
            <div><h3>{props.name}</h3></div>
            <div><p className={classes.description}>{props.description}</p></div>
            <div><h3 className={classes.price}>{price}</h3></div>
            <div>
            <MealsItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealsItem