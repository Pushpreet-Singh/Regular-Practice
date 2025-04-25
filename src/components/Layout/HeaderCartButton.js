import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';


const HeaderCartButton = (props) => {
const cartCtx=useContext(CartContext)

const numberCartItems=cartCtx.items.reduce((currentNum,item)=>{
  return currentNum + item.quantity
},0)
  return (
    <div>
     
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon /> 
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;