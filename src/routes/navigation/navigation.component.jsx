import { Outlet, useLocation } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/007 crown.svg';

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { pathname } = useLocation();

  const dropdownRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (iconRef.current === e.target) {
        return;
      }

      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropdown);
    return () => document.body.removeEventListener('click', closeDropdown);
  }, [setIsCartOpen]);

  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname, setIsCartOpen]);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon iconRef={iconRef} />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown dropdownRef={dropdownRef} />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
