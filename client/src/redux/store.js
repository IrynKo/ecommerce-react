import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  productReducer,
  productsReducer,
} from "../redux/products/productsReducer";
import { cartReducer } from "./cart/cartReducer";
import { signInUserReducer, signUpUserReducer } from "./user/userReducer";
import {
  myOrderListReducer,
  oneItemOrderReducer,
  orderCreateReducer,
  orderDeleteReducer,
  orderDetailsReducer,
  orderListReducer,
} from "./order/orderReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignIn: { userInfo } };
const reducer = combineReducers({
  productsList: productsReducer,
  productDetails: productReducer,
  cart: cartReducer,
  userSignIn: signInUserReducer,
  userSignUp: signUpUserReducer,
  order: orderCreateReducer,
  myOrders: myOrderListReducer,
  allOrders: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDelete: orderDeleteReducer,
  orderItems: oneItemOrderReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
