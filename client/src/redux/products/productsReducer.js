import {
  PRODUCTS_LIST_FAILURE,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "./productsActionsTypes";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
