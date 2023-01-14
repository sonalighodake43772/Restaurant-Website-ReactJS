import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
import CartContext from "../../store/Cart-Context";

const HeaderCart = (props) => {
  const cartctx = useContext(CartContext);
  let quantity = 0;

  cartctx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes["cart-title"]}>Your Cart </span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};
export default HeaderCart;
