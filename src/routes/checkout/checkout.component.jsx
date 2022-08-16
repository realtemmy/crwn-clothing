import { useContext } from "react";
import { CardContext } from "../../contexts/card-context";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";

import './checkout.style.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CardContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item, id) => {
        return <CheckoutItems key={id} item={item} />;
      })}

      <span className="total">${cartTotal}</span>
    </div>
  );
};
export default Checkout;
