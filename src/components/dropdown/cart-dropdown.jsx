import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CardContext } from "../../contexts/card-context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.style.scss'

const CartDropDown = () =>{
  const { cartItems } = useContext(CardContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () =>{
    navigate('/checkout')
  }

    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler}>to checkout</Button>
      </div>
    );
}

export default CartDropDown