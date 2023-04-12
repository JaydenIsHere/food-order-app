import classes from './MealsItem.module.css'

const MealsItem = (props) =>{

    const price = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}> 
            <div><h3>{props.name}</h3></div>
            <div><p className={classes.description}>{props.description}</p></div>
            <div><h3 className={classes.price}>{price}</h3></div>
        </li>
    )
}

export default MealsItem