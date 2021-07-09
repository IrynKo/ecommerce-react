import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartAction";
import CartItemStyled from "./CartItemStyled";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = (e) => {
    const id = e.target.dataset.id;
    dispatch(removeFromCart(id));
  };
  const onHandlerChange = (e) => {
    const qty = e.target.value;
    const id = e.target.dataset.id;
    dispatch(addToCart(id, qty));
  };
  return (
    <CartItemStyled>
      <img src={item.image} alt="cart" width="150px" />
      <div>
        <p>{item.name}</p>
        <p>{item.price}.00 £</p>
        <select
          value={item.qty}
          data-id={item.productId}
          onChange={onHandlerChange}
        >
          {[...Array(item.countInStock).keys()].map((cart) => (
            <option key={cart} value={cart}>
              {cart}
            </option>
          ))}
        </select>
        <button
          type="button"
          data-id={item.productId}
          onClick={removeFromCartHandler}
        >
          Delete
        </button>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
