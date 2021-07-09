import {
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  USER_LOGOUT,
} from "./userTypes";

export const signInUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN_USER_REQUEST:
      return { loading: true };
    case SIGN_IN_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SIGN_IN_USER_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const signUpUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_USER_REQUEST:
      return { loading: true };
    case SIGN_UP_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SIGN_UP_USER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
