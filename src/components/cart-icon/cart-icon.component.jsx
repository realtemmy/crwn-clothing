import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CardContext } from "../../contexts/card-context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartItems } = useContext(CardContext);
  const { count } = cartItems
  const toggleDropDown = () => setCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleDropDown} />
      <span className="item-count">{count}</span>
    </div>
  );
};
export default CartIcon;
