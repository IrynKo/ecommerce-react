import { ADD_TO_CART, REMOVE_ALL, REMOVE_FROM_CART } from "./cartTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find(
        (cart) => cart.productId === item.productId
      );
      if (product) {
        return {
          cartItems: state.cartItems.map((cart) =>
            cart.productId === product.productId ? item : cart
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, item],
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (cart) => cart.productId !== action.payload
        ),
      };
    case REMOVE_ALL:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
