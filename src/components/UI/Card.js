import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
    const CardClass=`${props.className} ${classes.card}`
  return (
    <div className={CardClass}> {props.children}</div>
  )
}

export default Card