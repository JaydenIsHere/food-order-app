import classes from 'Cart.module.css'

const Cart = () =>{

    const cartItem = <ul className={classes['cart-items']}>{
        [
        {id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,}
    ].map(item => (<li>{item.name}</li>))
    }</ul>
    
    return<>
    {cartItem}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.53</span>
    </div>
    
    <div></div>
    </>
}

export default Cart