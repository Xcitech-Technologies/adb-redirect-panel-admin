import * as actionTypes from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  offers: [],
  loading: false,
};

const Offers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_OFFERS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case actionTypes.GET_OFFERS_SUCCESS:
      return {
        ...state,
        loading: false,
        offers: action.payload,
      };
    case actionTypes.GET_OFFERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default Offers;
