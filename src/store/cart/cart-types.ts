export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
}

export type CartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export type Cart = {
  cartItems: CartItem[];
  isCartOpen: boolean;
};

export type CartMap = {
  [key: string]: CartItem;
};
