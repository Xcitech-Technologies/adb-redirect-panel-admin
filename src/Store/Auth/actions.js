import * as actionTypes from "./actionTypes";

export const loginAction = (payload) => ({
  type: actionTypes.LOGIN,
  payload,
});

export const logoutAction = () => ({
  type: actionTypes.LOGIN,
});

export const resetAuthStatusAction = () => ({
  type: actionTypes.RESET_AUTH_STATUS,
});
