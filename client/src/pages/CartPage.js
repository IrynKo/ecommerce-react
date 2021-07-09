import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "../component/cartItem/CartItem";
import { createOrder } from "../redux/order/orderActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartsList = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.userSignIn.userInfo);
  const itemsQty = cartsList.reduce((a, b) => {
    return Number(a) + Number(b.qty);
  }, 0);
  const totalPrice = cartsList.reduce((a, b) => {
    return Number(a) + Number(b.price) * Number(b.qty);
  }, 0);
  const addAnOrder = () => {
    if (user) {
      dispatch(
        createOrder({
          orderItems: cartsList,
          itemsQty,
          totalPrice,
        })
      );
      history.push("/ordersucces");
    } else history.push("/signin");
  };
  return (
    <div className="cart-page container">
      <ul className="cart-page__list">
        {cartsList.length > 0 ? (
          cartsList.map((item) => <CartItem key={item.productId} item={item} />)
        ) : (
          <p>Cart is empty</p>
        )}
      </ul>
      <div className="cart-page__summary">
        <h5>
          Order Summary
          <span>({itemsQty} items)</span>
        </h5>
        <span>Total: {totalPrice}.00 £</span>
        <button
          type="submit"
          disabled={cartsList.length === 0}
          onClick={addAnOrder}
        >
          Make an order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
