import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const AddItemToCart = (item) => {
    const exist = items.find((itemp) => itemp.id === item.id);
    if (exist) {
      updateItems(
        items.map((itemp) =>
          itemp.id === item.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : itemp
        )
      );
    } else {
      updateItems([...items, { ...item, quantity: Number(item.quantity) }]);
    }
  };

  const RemoveItemFromCart = (id) => {
    const exist = items.find((itemp) => itemp.id === id);
    if (exist.quantity === 1) {
      updateItems(items.filter((itemp) => itemp.id !== id));
    } else {
      updateItems(
        items.map((itemp) =>
          itemp.id === id
            ? {
                ...exist,
                quantity: exist.quantity - 1,
              }
            : itemp
        )
      );
    }
  };

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
