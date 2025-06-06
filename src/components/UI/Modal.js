import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
// import Cart from '../Cart/Cart'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
  return (
<div className={classes.modal}>
<div className={classes.content}>
{props.children}
</div>
</div> 
  )
}

const Modal = (props) => {
  const portalElement=document.getElementById('backdrop-root')
  return (
    
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    
    </Fragment>
  )
}

export default Modal

