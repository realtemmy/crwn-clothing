import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CardContext } from "../../contexts/card-context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartdropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.style'

const CartDropDown = () =>{
  const { cartItems } = useContext(CardContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () =>{
    navigate('/checkout')
  }

    return (
      <CartdropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>to checkout</Button>
      </CartdropdownContainer>
    );
}

export default CartDropDown