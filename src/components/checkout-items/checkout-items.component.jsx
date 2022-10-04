import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-action";
import { removeCartInItem } from "../../store/cart/cart-action";
import { deleteCart } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-items.style";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const cartItems = useSelector(selectCartItems)
const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeCartInItem(cartItems, item));
  const clearItemHandler = () => dispatch(deleteCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
