import React from 'react'
import classes from './CartItem.module.css'
const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          x
          <span className={classes.quantity}>{props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>

    </li>
  )
}

export default CartItem