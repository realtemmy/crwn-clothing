import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/dropdown/cart-dropdown";
import { CardContext } from "../../contexts/card-context";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  Navlink
} from "./navigation.style.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CardContext);

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
