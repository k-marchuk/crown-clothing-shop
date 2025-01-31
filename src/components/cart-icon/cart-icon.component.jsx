import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icon.styles.jsx';

const CartIcon = ({ iconRef }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer ref={iconRef} onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
