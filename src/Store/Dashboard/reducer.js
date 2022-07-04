import * as actionTypes from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  data: {},
};

const Dashboard = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.SET_AUTH_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //     errorMessage: "",
    //   };
    case actionTypes.GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.GET_DASHBOARD_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default Dashboard;
