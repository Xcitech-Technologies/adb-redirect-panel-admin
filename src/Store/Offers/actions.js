import * as actionTypes from "./actionTypes";

const getOffersAction = (params) => ({
  type: actionTypes.GET_OFFERS,
  params,
});

export default getOffersAction;
