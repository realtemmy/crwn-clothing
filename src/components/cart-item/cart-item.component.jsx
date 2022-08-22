import { CartItemContainer, Image, Itemdetails, Name } from "./cart-item.styles";

const CartItem = ({cartItem}) =>{
    const { name, imageUrl, price, quantity } = cartItem
    return (
      <CartItemContainer>
        <Image src={imageUrl} alt={`${name}`} />
        <Itemdetails>
          <Name className="name">{name}</Name>
          <span className="price">
            {quantity} x ${price}
          </span>
        </Itemdetails>
      </CartItemContainer>
    );
}
export default CartItem;