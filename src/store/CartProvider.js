import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const AddItemToCart = (item) => {
    console.log(item);
    const index = items.findIndex((itemp) => itemp.id === item.id);

    if (index === -1) {
      items.push({
        ...item,
        quantity: 1,
      });
      const updateCart = [...items];
      updateItems(updateCart);
    } else {
      items[index].quantity += 1;
      items[index].price = items[index].price * items[index].quantity;
      const updateCart = [...items];
      updateItems(updateCart);
    }
  };
  const RemoveItemFromCart = (id) => {};

  const cartContext = {
    items: items,

    addItem: AddItemToCart,
    removeItem: RemoveItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
