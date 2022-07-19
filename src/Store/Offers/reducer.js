import * as actionTypes from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  offers: [],
  loading: false,
  offerDetails: {},
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
    case actionTypes.GET_OFFER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        offerDetails: action.payload,
      };
    case actionTypes.ADD_OFFER_SUCCESS:
      return {
        ...state,
        loading: false,
        offerDetails: action.payload,
      };
    case actionTypes.CLONE_OFFER_SUCCESS:
    case actionTypes.DELETE_OFFER_SUCCESS:
    case actionTypes.DELETE_SELECTED_OFFERS_SUCCESS:
    case actionTypes.PAUSE_OFFER_SUCCESS:
    case actionTypes.RESUME_OFFER_SUCCESS:
    case actionTypes.TOGGLE_OFFER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case actionTypes.GET_OFFER_DETAILS_FAILURE:
    case actionTypes.CLONE_OFFER_FAILURE:
    case actionTypes.DELETE_SELECTED_OFFERS_FAILURE:
    case actionTypes.PAUSE_OFFER_FAILURE:
    case actionTypes.RESUME_OFFER_FAILURE:
    case actionTypes.DELETE_OFFER_FAILURE:
    case actionTypes.TOGGLE_OFFER_FAILURE:
    case actionTypes.ADD_OFFER_FAILURE:
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
