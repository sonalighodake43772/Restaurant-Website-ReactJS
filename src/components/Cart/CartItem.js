import React from "react";
import classes from './CartItem.module.css';

const CartItem=(props)=>
{
    return (
      
          <li className={classes["cart-item"]}>
            <div>
              <h2>{props.name}</h2>
              <div className={classes.summary}>
                <span className={classes.price}>{props.price.toFixed(2)}</span>
                <span className={classes.quantity} >x {props.quantity}</span>
              </div>
            </div>
            <div className={classes.action}>
              
            {/* <button onClick={props.onAdd}>+</button> */}
              <button onClick={props.onRemove}>-</button>
            </div>
          </li>
        )}
    

export default CartItem;