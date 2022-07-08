import * as actionTypes from "./actionTypes";

export const getOffersAction = (params) => ({
  type: actionTypes.GET_OFFERS,
  params,
});

export const cloneOfferAction = (id) => ({
  type: actionTypes.CLONE_OFFER,
  id,
});

export const deleteOfferAction = (id) => ({
  type: actionTypes.DELETE_OFFER,
  id,
});

export const deleteSelectedOffersAction = (links) => ({
  type: actionTypes.DELETE_SELECTED_OFFERS,
  links,
});
export const pauseOffersAction = (links) => ({
  type: actionTypes.PAUSE_OFFER,
  links,
});
export const resumeOffersAction = (links) => ({
  type: actionTypes.RESUME_OFFER,
  links,
});
