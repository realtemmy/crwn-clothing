import { useContext } from "react";
import { CardContext } from "../../contexts/card-context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-items.style';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const { deleteCart, addItemToCart, removeCartInItem } =
    useContext(CardContext);

  const clearItemHandler = () => deleteCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeCartInItem(item);

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