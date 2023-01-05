import React from "react";
import CartIcon from '../Cart/CartIcon';
import  classes from './HeaderCart.module.css';

const HeaderCart=()=>
{
    return(
        <button className={classes['button']} >
 <span className={classes.icon}>
   <CartIcon/>
   </span>
<h3 className={classes['cart-title']}>Your Cart </h3>
<h3 className={classes['badge']}> 0</h3>

        </button>

    );
}
export default HeaderCart;