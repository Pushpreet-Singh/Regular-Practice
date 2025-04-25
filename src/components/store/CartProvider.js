import React, { useReducer } from 'react'
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount : 0
}
const cartReducer=(state,action)=>{
if(action.type === 'ADD'){
   const updatedTotalAmount =state.totalAmount + action.item.price * action.item.quantity
   const existingCartitemIndex= state.items.findIndex(
    (item)=>item.id === action.item.id
   )
   const existingCartitem=state.items[existingCartitemIndex]
   let updatedItems;
   if(existingCartitem){
    const updatedItem={
        ...existingCartitem,
        quantity:existingCartitem.quantity + action.item.quantity
    }
    updatedItems=[...state.items]
    updatedItems[existingCartitemIndex]=updatedItem
   }else{
    updatedItems=state.items.concat(action.item)
   }
   return {
    items:updatedItems,
    totalAmount:updatedTotalAmount
   }
}
if(action.type === 'REMOVE'){
    const existingCartitemIndex=state.items.findIndex(
        (item) =>item.id === action.id
    )
    const existingCartitem=state.items[existingCartitemIndex]
    const updatedTotalAmount=state.totalAmount-existingCartitem.price
    let updatedItems;
    if(existingCartitem.quantity === 1){
updatedItems =state.items.filter(item => item.id !== action.id)
    }else{
        const updatedItem={...existingCartitem,quantity:existingCartitem.quantity-1}
        updatedItems=[...state.items]
        updatedItems[existingCartitemIndex]=updatedItem
    }
    return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
    }
}
return defaultCartState
}

const CartProvider = (props) => {
    const[cartState,dispatchCartActions]=useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler=(item)=> {
dispatchCartActions({type:'ADD',item:item})
    }
    const removeItemFromCartHandler=(id)=>{
dispatchCartActions({type:'REMOVE',id:id})
    }
    const cartContext={
items:cartState.items,
totalAmount:cartState.totalAmount,
addItem:addItemToCartHandler,
removeItem:removeItemFromCartHandler
    }
  return (
  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartProvider