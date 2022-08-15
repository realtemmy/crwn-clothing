import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  cartItems.map(cartItem => console.log(cartItem.count ++))
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1, count: 1 }];
};

/*
CARD_ITEM COUNT

add count value when cartitems is empty

add one to the value of count

*/

export const CardContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CardProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setCartOpen, cartItems, addItemToCart };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
