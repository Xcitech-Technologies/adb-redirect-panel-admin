import * as actionTypes from "./actionTypes";

export const getOffersAction = (params) => ({
  type: actionTypes.GET_OFFERS,
  params,
});

export const getOfferDetailsAction = (id) => ({
  type: actionTypes.GET_OFFER_DETAILS,
  id,
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

export const toggleOfferAction = (obj) => ({
  type: actionTypes.TOGGLE_OFFER,
  obj,
});

export const addOfferAction = (obj) => ({
  type: actionTypes.ADD_OFFER,
  obj,
});
