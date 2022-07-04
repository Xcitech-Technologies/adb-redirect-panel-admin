import * as actionTypes from "./actionTypes";

const initialState = {
  error: null,
  loading: false,
  token: "",
  userData: null,
  errorMessage: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
