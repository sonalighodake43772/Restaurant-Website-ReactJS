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
        quantity: Number(item.quantity),
      });
      const updateCart = [...items];
      updateItems(updateCart);
    } else {
      items[index].quantity = items[index].quantity + Number(item.quantity);

      //  items[index].price = items[index].price * items[index].quantity;
      const updateCart = [...items];
      updateItems(updateCart);
    }
  };
  const RemoveItemFromCart = (id) => {
    const exist = items.find((x) => x.id === id);
    if (exist.quantity === 1) {
      updateItems(items.filter((x) => x.id !== id));
    } else {
      updateItems(
        items.map((x) =>
          x.id === id
            ? {
                ...exist,
                quantity: exist.quantity - 1,
              }
            : x
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
