import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const cartitem = (
    <ul>
      {cartcntx.items.map((item) => (
        <li className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>{item.price}</span>
              <span className={classes.quantity}>x {item.quantity}</span>
            </div>
          </div>
          <div className={classes.action}>
            <button onClick={item.onRemove}>−</button>
            <button onClick={item.onAdd}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
  let total = 0;
  cartcntx.items.map((item) => {
    total = total + item.price;
  });

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
