import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CategoryItem } from "../../store/categories/categories-types";
import { addItemToCart } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style";

export type ProductCardProps = {
  products: CategoryItem;
};
const ProductCard: FC<ProductCardProps> = ({ products }) => {
  const { imageUrl, name, price } = products;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, products));
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
