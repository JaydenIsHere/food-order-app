import classes from './Header.module.css'
import headerImage from '../../asset/meals.jpg'
import HeaderButton from './HeaderButton'
const Header = (props) =>{

    return<>
    <header className={classes.header}>
        <h1>React-Meals</h1>
        <HeaderButton/>
    </header>
    <div className={classes['main-image']}>

        <img src={headerImage} alt='this is header image'/>
    </div>
    </>
}

export default Header