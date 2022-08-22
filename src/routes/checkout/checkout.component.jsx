import { useContext } from "react";
import { CardContext } from "../../contexts/card-context";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.style.jsx'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CardContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Products</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item, id) => {
        return <CheckoutItems key={id} item={item} />;
      })}

      <Total>${cartTotal}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
