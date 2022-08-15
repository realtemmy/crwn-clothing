import { useContext } from "react";
import { CardContext } from "../../contexts/card-context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.style.scss'

const CartDropDown = () =>{

  const { cartItems } = useContext(CardContext);

    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {
            cartItems.map(item => (<CartItem key={item.id} cartItem={item} />))
          }
        </div>
        <Button>to checkout</Button>
      </div>
    );
}

export default CartDropDown