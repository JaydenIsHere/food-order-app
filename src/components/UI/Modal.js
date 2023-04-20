import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'
const BackDrop = (props) =>{
    return(
        <div className={classes.backdrop} onClick={props.onToggleModal} />
        )
       }
    
 const ModalOverlay = (props) =>{
        return(
            <div className={classes.modal}>{props.children}</div>
            )
        }

        const domOverlays = document.getElementById('overlays')
const Model =(props) =>{

    return(
        <>
       { ReactDOM.createPortal(<BackDrop onToggleModal={props.onToggleModal}/>,domOverlays)}
       { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,domOverlays)}
        </>
    )
}

export default Model 