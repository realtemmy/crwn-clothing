import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/dropdown/cart-dropdown";
import { selectIsCartOpen } from "../../store/cart/cart-selector";
import { signOutStart } from "../../store/user/user-action";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  Navlink
} from "./navigation.style.js";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <Navlink to="/shop">SHOP</Navlink>
          {currentUser ? (
            <Navlink as="span" onClick={signOutUser}>SIGN OUT</Navlink>
          ) : (
            <Navlink to="/auth">SIGN IN</Navlink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
