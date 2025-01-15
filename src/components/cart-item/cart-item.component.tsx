import { FC } from "react";
import {
  CartItemContainer,
  Image,
  Itemdetails,
  Name,
} from "./cart-item.styles";

import { CartItem as TCartItem } from "../../store/cart/cart-types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Itemdetails>
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </Itemdetails>
    </CartItemContainer>
  );
};
export default CartItem;
