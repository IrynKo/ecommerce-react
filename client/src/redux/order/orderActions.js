import axios from "axios";
import Cookies from "js-cookie";
import { removeAll } from "../cart/cartAction";
import {
  MY_ORDER_LIST_FAiLURE,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DELETE_FAILURE,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_REQUEST,
  ORDER_EDIT_REQUEST,
  ORDER_EDIT_SUCCESS,
  ORDER_EDIT_FAILURE,
  CHANGE_A_ITEM,
  REMOVE_CHANGE_A_ITEM,
} from "./orderTypes";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    const {
      userSignIn: { userInfo },
    } = getState();
    const {
      data: { data: newOrder },
    } = await axios.post("/api/orders", order, {
      headers: { Authorization: " Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
   /* const {
      cart: { cartItems },
    } = getState();*/
    Cookies.set("cartItems", JSON.stringify([]));
    dispatch(removeAll());
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAILURE, payload: error.message });
  }
};
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDER_LIST_REQUEST });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.get("/api/orders/mine", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MY_ORDER_LIST_FAiLURE, payload: error.message });
  }
};

export const getListOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.get("/api/orders", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAILURE, payload: error.message });
  }
};
export const getOrderDetails = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.get("/api/orders/" + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAILURE, payload: error.message });
  }
};
    
export const deleteOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.delete("/api/orders/" + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DELETE_FAILURE, payload: error.message });
  }
};
export const editOrder = (orderId, order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_EDIT_REQUEST, payload: orderId });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.put("/api/orders/" + orderId, order, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: ORDER_EDIT_SUCCESS, payload: data });
    dispatch(getListOrders())
  } catch (error) {
    dispatch({ type: ORDER_EDIT_FAILURE, payload: error.message });
  }
};
export const addToOrder = (productId, price) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_A_ITEM,
      payload: {
        productId,
        //price,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const removeAddToOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_CHANGE_A_ITEM,
      payload: {},
    });
  } catch (error) {
    console.log(error);
  }
};
