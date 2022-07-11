import * as actionTypes from "./actionTypes";

const getGlobalConditionsAction = () => ({
  type: actionTypes.GET_GLOBAL_CONDITIONS,
});

export const updateGlobalConditionsAction = (object) => ({
  type: actionTypes.UPDATE_GLOBAL_CONDITIONS,
  object,
});

export default getGlobalConditionsAction;
