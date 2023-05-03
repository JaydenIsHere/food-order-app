
import CartIcon from './CartIcon'
import classes from './HeaderButton.module.css'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
const HeaderButton =(props)=>{

    const cartCtx = useContext(CartContext)

    const showCart = () =>{
        props.onToggleModal();
    }
    const numberOfCartitem = cartCtx.items.reduce((acc,cur) =>  {return acc + cur.amount; } , 0)
    return(
        <button className={classes.button} onClick={showCart} >
           <CartIcon className={classes.icon}/>
            <span>Cart</span>
            <span className={classes.badge}>
                {numberOfCartitem}
            </span>
        </button>
    )
}

export default HeaderButton