import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Model from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) =>{
    const cartCtx = useContext(CartContext)
    const addCartItemHandler = (item) =>{
        cartCtx.addItem(item)
    }
    const removeCartItemHandler = (id) =>{
        cartCtx.removeItem(id)
    }
  
    const cartItem = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => (
        <CartItem 
        price ={item.price} 
        name={item.name} 
        amount={item.amount} 
        onRemove={removeCartItemHandler.bind(null,item.id)}
        onAdd={addCartItemHandler.bind(null,item)}
        />
        ))
    }</ul>
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0
    return<Model onToggleModal = {props.onToggleModal}>
    {cartItem}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span> 
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onToggleModal}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
    </div>
    </Model>
}

export default Cart