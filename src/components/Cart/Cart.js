import Model from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) =>{

    const cartItem = <ul className={classes['cart-items']}>{
        [
        {id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        },
        {
        id: 'm2',
        name: 'Pizza',
        description: 'Soft texture with unlimited cheese',
        price: 35.22,},
    ].map(item => (<li>{item.name}</li>))
    }</ul>
    
    return<Model onToggleModal = {props.onToggleModal}>
    {cartItem}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.53</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onToggleModal}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Model>
}

export default Cart