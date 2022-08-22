import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { CardContext } from "../../contexts/card-context";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style";

const ProductCard = ({products}) =>{
    const { imageUrl, name, price} = products
    const { addItemToCart } = useContext(CardContext);

    const addProductToCart = () => addItemToCart(products);
    return (
      <ProductCartContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
          Add to cart
        </Button>
      </ProductCartContainer>
    );
}

export default ProductCard;