import axios from "axios";
import {
  PRODUCTS_LIST_FAILURE,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "./productsActionsTypes";

export const getProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data  });
  } catch (error) {
    dispatch({ type: PRODUCTS_LIST_FAILURE, payload: error.message });
  }
};

export const getProductDetails = (productID) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productID });
    const { data } = await axios.get("/api/products/" + productID);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAILURE, payload: error.message });
  }
};
