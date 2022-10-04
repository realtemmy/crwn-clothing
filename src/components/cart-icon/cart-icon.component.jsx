import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart-selector";
import { setCartOpen } from "../../store/cart/cart-action";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleDropDown = () => dispatch(setCartOpen(!isCartOpen));
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleDropDown} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
