import { useContext } from "react";
import { CardContext } from "../../contexts/card-context";

import {
  CheckoutItemContainer,
  ImageContainer,
  ProductsDetails,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from "./checkout-items.style.jsx";

const CheckoutItems = ({item}) =>{
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, removeCartInItem, deleteCart } =
      useContext(CardContext);

    const increaseHandler = () => addItemToCart(item)
    const decreaseHandler = () => removeCartInItem(item);
    const deleteIconHandler = () => deleteCart(item)

    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <ProductsDetails>{name}</ProductsDetails>
        <Quantity>
          <Arrow onClick={decreaseHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={increaseHandler}>&#10095;</Arrow>
        </Quantity>
        <ProductsDetails> ${price} </ProductsDetails>
        <RemoveButton onClick={deleteIconHandler}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    );
}

export default CheckoutItems;