import classes from './Header.module.css'
import headerImg from '../../asset/meals.jpg'
import HeaderButton from './HeaderButton'
const Header = (props) =>{
    
    return<>
    <header className={classes.header}>
        <h1>React-Meals</h1>
        <HeaderButton onToggleModal ={props.onToggleModal}/>
    </header>
    <div className={classes['main-image']}>

        <img src={headerImg} alt='this is header image'/>
    </div>
    </>
}

export default Header