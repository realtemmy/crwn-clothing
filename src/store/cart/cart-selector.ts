import { Cart, CartItem } from "./cart-types";
import { createSelector } from "reselect";

const selectCartReducer = (state): Cart => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart): CartItem[] => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]): number =>
    cartItems.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]): number =>
    cartItems.reduce(
      (total: number, cartItem: CartItem) =>
        total + cartItem.quantity * cartItem.price,
      0
    )
);
