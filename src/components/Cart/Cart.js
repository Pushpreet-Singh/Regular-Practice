import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import CashOut from './CashOut';

const Cart = (props) => {
  const [isCashout, setIsCashout] = useState(false);
  const cartCtx=useContext(CartContext)
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
const hashItems=cartCtx.items.length > 0

const cartItemAddhandler=(item)=>{
cartCtx.addItem({...item,quantity:1})
}
const cartItemRemovehandler=(id)=>{
cartCtx.removeItem(id)
}
const submitOrderHandler = (userData) => {
  
        fetch ('https://reactmeals-2478c-default-rtdb.firebaseio.com/orders.json',{
            method:'POST',
            body:JSON.stringify({
              user : userData,
              orderedItems : cartCtx.items
            }),
            headers:{
                'Content-type':'application/json',
            },
        })
}
  const CartItems = (
    <ul className={classes['cart-items']}>
     {cartCtx.items.map((item)=>(
  <CartItem 
  key={item.id}
  name={item.name}
  quantity={item.quantity}
  price={item.price}
  onRemove={cartItemRemovehandler.bind(null,item.id)}
  onAdd={cartItemAddhandler.bind(null,item)}
/>
     )
     )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      {isCashout && <CashOut onCancel={props.onClose} onAddUserData = {submitOrderHandler}/>}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>
          Close
        </button>
       {!isCashout && hashItems && (
         <button className={classes.button} onClick={() => setIsCashout(true)}>
           Order
         </button>
       )}
      </div>
    </Modal>
  );
};

export default Cart;