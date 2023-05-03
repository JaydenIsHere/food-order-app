import classes from './Input.module.css'
import React from 'react'
const Input = React.forwardRef((props,ref) =>{
    return (
        <div className={classes.input}>
<label htmlFor={props.input.id}>{props.label}</label>
<input type={props.input.type} {...props.input} ref={ref}></input>
        </div>
    )
})

export default Input