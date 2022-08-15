import { useContext } from 'react';

import Button from '../button/button.component';
import { CardContext } from "../../contexts/card-context";

import "./product-card.style.scss";

const ProductCard = ({products}) =>{
    const { imageUrl, name, price} = products
    const { addItemToCart } = useContext(CardContext);

    const addProductToCart = () => addItemToCart(products);
    return (
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div>
    );
}

export default ProductCard;