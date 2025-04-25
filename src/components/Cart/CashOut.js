import React, { useState } from 'react'
import classes from './CashOut.module.css'

const CashOut = (props) => {
    const[isVisible,setIsVisible] = useState(true)
    const onSubmitHandler = async (event) => {
       event.preventDefault()
       const data = {
        name:event.target.name.value,
        address: event.target.address.value,
        pincode: event.target.pincode.value,
        mobile: event.target.mobile.value
       }

       props.onAddUserData(data)
       
    }
  return (
    <div>
        {isVisible && (
    <form className={classes.form} onSubmit={onSubmitHandler}>

     <div className={classes.controls}>
        <label htmlFor={classes.name}>Name :</label>
        <input name='name'/>
        <label htmlFor={classes.address}>Address :</label>
        <input name='address'/>
        <label htmlFor={classes.pin}>Pin-Code :</label>
        <input type='number' name='pincode'/>
        <label htmlFor={classes.num}>Mobile Number :</label>
        <input type='number'name='mobile'/>
     </div>
     <div className={classes.actions}>
        <button className={classes.btn} onClick={()=> setIsVisible(false)}>Cancel</button>
        <button className={classes.btn}>Cashout</button> 
     </div>
    </form>
        )}
    </div>
  )
}

export default CashOut