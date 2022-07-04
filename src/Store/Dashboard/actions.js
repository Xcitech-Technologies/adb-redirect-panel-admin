import * as actionTypes from "./actionTypes";

const getDashboardAction = (sort) => ({
  type: actionTypes.GET_DASHBOARD,
  sort,
});

export default getDashboardAction;
