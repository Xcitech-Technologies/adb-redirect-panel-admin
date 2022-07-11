import * as actionTypes from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  message: "",
  loading: false,
  data: [],
};

const GlobalConditions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GLOBAL_CONDITIONS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case actionTypes.GET_GLOBAL_CONDITIONS_SUCCESS:
      return {
        ...initialState,
        data: action.payload,
      };
    case actionTypes.GET_GLOBAL_CONDITIONS_FAILURE:
      return {
        ...initialState,
        error: true,
        errorMessage: action.errorMessage,
      };

    case actionTypes.UPDATE_GLOBAL_CONDITIONS_SUCCESS:
      return { ...initialState, message: action.payload };
    case actionTypes.UPDATE_GLOBAL_CONDITIONS_FAILURE:
      return { ...initialState, error: true, errorMessage: action.payload };
    default:
      return state;
  }
};

export default GlobalConditions;
