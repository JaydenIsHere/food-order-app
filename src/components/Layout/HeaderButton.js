
import CartIcon from './CartIcon'
import classes from './HeaderButton.module.css'
const HeaderButton =(props)=>{
    const showCart = () =>{
        props.onToggleModal();
    }
    return(
        <button className={classes.button} onClick={showCart} >
           <CartIcon className={classes.icon}/>
            <span>Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderButton