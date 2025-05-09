import React, { Fragment } from 'react'
import classes from './Header.module.css'
import food from '../../assests/food.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
   <Fragment>
    <header className={classes.header }>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
<div className={classes['main-image']}>
    <img src={food} alt='a table full of food'/>
</div>
   </Fragment>
  )
}

export default Header