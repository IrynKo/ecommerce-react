import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../redux/user/userActions";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.userSignIn.userInfo);
  const cart = useSelector((state) => state.cart.cartItems);

  const onHandlerLogOut = () => {
    dispatch(logout());
    history.push("/signin");
  };
  return (
    <HeaderStyled className="container">
      <NavLink to="/">YUTNII HOME</NavLink>
      {!userInfo?.isAdmin && (
        <>
          <NavLink className="nav-basket" to="/cart">
            <FontAwesomeIcon icon={faShoppingBasket} />
            {cart.length > 0 && <sup>{cart.length}</sup>}
            <span>BUSKET</span>
          </NavLink>
        </>
      )}
      {userInfo && !userInfo?.isAdmin && (
        <NavLink to="/myorders">MY ORDERS</NavLink>
      )}
      {userInfo?.isAdmin && (
        <NavLink className="nav-orders" to="/orders">
          ORDERS
        </NavLink>
      )}
      {userInfo ? (
        <>
          <span className="nav-name">
            {userInfo?.isAdmin ? "Admin" : userInfo?.name}
          </span>
          <button type="button" onClick={onHandlerLogOut}>
            Log Out
          </button>
        </>
      ) : (
        <NavLink to="/signin">
          <FontAwesomeIcon icon={faUser} />
          <span>Sign In</span>
        </NavLink>
      )}
    </HeaderStyled>
  );
};

export default Header;
