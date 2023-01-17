import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const AddItemToCart = (item) => {
    cartcntx.addItem(item);
    
  }; 
 const RemoveItemCart = (id) => {
     cartcntx.removeItem(id);
    console.log('id',id);
   };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity} 
          price={item.price}
           onRemove={RemoveItemCart.bind(null,item.id)}
          onAdd={AddItemToCart.bind(null,item)}
        />
      ))}
    </ul>
  );
  

  let total = 0;
  cartcntx.items.map((item) => {
    return(
    total = total + item.price *item.quantity
    );
  });

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
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
