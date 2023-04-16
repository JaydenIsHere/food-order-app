import Input from '../UI/Input'
import classes from './MealsItemForm.module.css'

const MealsItemForm = (props) =>{
    return (
        <form className={classes.form}>
       <Input label="number" 
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
        </form>
    )
}

export default MealsItemForm