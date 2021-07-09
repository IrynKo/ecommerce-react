import {
  CHANGE_A_ITEM,
  MY_ORDER_LIST_FAiLURE,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DELETE_FAILURE,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_EDIT_FAILURE,
  ORDER_EDIT_REQUEST,
  ORDER_EDIT_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  REMOVE_CHANGE_A_ITEM,
} from "./orderTypes";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: action.payload, success: true };
    case ORDER_CREATE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const myOrderListReducer = (
  state = {
    orders: [],
  },
  action
) => {
  switch (action.type) {
    case MY_ORDER_LIST_REQUEST:
      return { loading: true };
    case MY_ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case MY_ORDER_LIST_FAiLURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const orderListReducer = (
  state = {
    orders: [],
  },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, allOrders: action.payload };
    case ORDER_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = {
    orderItems: [],
  },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDeleteReducer = (
  state = {
    orderDetails: {
      order: {},
    },
  },
  action
) => {
  switch (action.type) {
    case ORDER_DELETE_REQUEST:
      return { loading: true };
    case ORDER_DELETE_SUCCESS:
      
      return { loading: false, order: action.payload, success: true };
    
    case ORDER_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const orderEditReducer = (
  state = { order: [{ orderItems: [] }] },
  action
) => {
  switch (action.type) {
    case ORDER_EDIT_REQUEST:
      return { loading: true };
    case ORDER_EDIT_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_EDIT_FAILURE:
      return { loading: false, error: action.payload };
    
    default:
      return state;
  }
};

export const oneItemOrderReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case CHANGE_A_ITEM:
      const item = action.payload.productId;
      const orderItem = state.orderItems.find(
        (cart) => cart.productId === item.productId
      );
      if (orderItem) {
        return {
          orderItems: state.orderItems.map((cart) =>
            cart.productId === orderItem.productId ? item : cart
          ),
        };
      }
      return {
        orderItems: [...state.orderItems, item],
      };
    case REMOVE_CHANGE_A_ITEM:
      return {
        orderItems: [],
      };
    default:
      return state;
  }
};
