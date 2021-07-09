import axios from "axios";
import Cookie from "js-cookie";
import { ADD_TO_CART, REMOVE_ALL, REMOVE_FROM_CART } from "./cartTypes";
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: data._id,
        name: data.name,
        price: data.price,
        image: data.image,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.log(error);
  }
};
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
export const removeAll = () => (dispatch, getState) => {
  dispatch({ type: REMOVE_ALL });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
