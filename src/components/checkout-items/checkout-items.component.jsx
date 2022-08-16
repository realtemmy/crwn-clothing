import { useContext, useEffect } from "react";
import { CardContext } from "../../contexts/card-context";

import './checkout-items.style.scss'

const CheckoutItems = ({item}) =>{
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, removeCartInItem, deleteCart } =
      useContext(CardContext);

    const increaseHandler = () => addItemToCart(item)
    const decreaseHandler = () => removeCartInItem(item);
    const deleteIconHandler = () => deleteCart(item)

    return (
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={decreaseHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={increaseHandler}>
            &#10095;
          </div>
        </span>
        <span className="price"> ${price} </span>
        <div className="remove-button" onClick={deleteIconHandler}>
          &#10005;
        </div>
      </div>
    );
}

export default CheckoutItems;