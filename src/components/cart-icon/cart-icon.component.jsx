import { useContext } from "react";
import { CardContext } from "../../contexts/card-context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartCount } = useContext(CardContext);

  const toggleDropDown = () => setCartOpen(!isCartOpen);
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleDropDown} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
