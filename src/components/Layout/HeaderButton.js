
import CartIcon from './CartIcon'
import classes from './HeaderButton.module.css'
const HeaderButton =()=>{

    return(
        <button className={classes.button}>
           <CartIcon className={classes.icon}/>
            <span>Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderButton