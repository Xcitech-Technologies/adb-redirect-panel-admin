import { put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import API from "../../Axios/Axios";

function* getOffersSaga({ params }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = params
      ? yield API.post("/searchLink", params)
      : yield API.get("/links/true");

    if (data.success) {
      yield put({
        type: actionTypes.GET_OFFERS_SUCCESS,
        payload: data.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_OFFERS_FAILURE,
        errorMessage: "Unable to load Offers.",
      });
    }
  } catch (error) {
    toast.error("Unable to load Offers.");
    yield put({
      type: actionTypes.GET_OFFERS_FAILURE,
      errorMessage: "Unable to load Offers.",
    });
  }
}

function* cloneOfferSaga({ id }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.get(`/cloneLink/${id}`);

    if (data.success) {
      toast.success("Link cloned successfully.");
      yield put({ type: actionTypes.GET_OFFERS });
      yield put({
        type: actionTypes.CLONE_OFFER_SUCCESS,
        payload: "Link cloned successfully.",
      });
    } else {
      toast.error("Unable to clone Link.");
      yield put({
        type: actionTypes.CLONE_OFFER_FAILURE,
        errorMessage: "Unable to clone Link.",
      });
    }
  } catch (error) {
    toast.error("Unable to clone Link.");
    yield put({
      type: actionTypes.CLONE_OFFER_FAILURE,
      errorMessage: "Unable to clone Link.",
    });
  }
}

function* deleteOfferSaga({ id }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(`/deleteLink/${id}`);

    if (data.success) {
      toast.success("Link deleted successfully.");
      yield put({ type: actionTypes.GET_OFFERS });
      yield put({
        type: actionTypes.DELETE_OFFER_SUCCESS,
        payload: "Link deleted successfully.",
      });
    } else {
      toast.error("Unable to delete Link.");
      yield put({
        type: actionTypes.DELETE_OFFER_FAILURE,
        errorMessage: "Unable to delete Link.",
      });
    }
  } catch (error) {
    toast.error("Unable to delete Link.");
    yield put({
      type: actionTypes.DELETE_OFFER_FAILURE,
      errorMessage: "Unable to delete Link.",
    });
  }
}

function* deleteSelectedOffersSaga({ links }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(`/multiple/deleteLink`, links);

    if (data.success) {
      toast.success(data.data);
      yield put({ type: actionTypes.GET_OFFERS });
      yield put({
        type: actionTypes.DELETE_SELECTED_OFFERS_SUCCESS,
        payload: data.data,
      });
    } else {
      toast.error("Unable to delete Links.");
      yield put({
        type: actionTypes.DELETE_SELECTED_OFFERS_FAILURE,
        errorMessage: "Unable to delete Links.",
      });
    }
  } catch (error) {
    toast.error("Unable to delete Links.");
    yield put({
      type: actionTypes.DELETE_SELECTED_OFFERS_FAILURE,
      errorMessage: "Unable to delete Links.",
    });
  }
}
function* pasueOfferSaga({ links }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(`/multiple/pauseLink`, links);

    if (data.success) {
      toast.success(data.data);
      yield put({ type: actionTypes.GET_OFFERS });
      yield put({
        type: actionTypes.PAUSE_OFFER_SUCCESS,
        payload: data.data,
      });
    } else {
      toast.error("Unable to pause Links.");
      yield put({
        type: actionTypes.PAUSE_OFFER_FAILURE,
        errorMessage: "Unable to pause Links.",
      });
    }
  } catch (error) {
    toast.error("Unable to pause Links.");
    yield put({
      type: actionTypes.PAUSE_OFFER_FAILURE,
      errorMessage: "Unable to pause Links.",
    });
  }
}
function* resumeOfferSaga({ links }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(`/multiple/resumeLink`, links);

    if (data.success) {
      toast.success(data.data);
      yield put({ type: actionTypes.GET_OFFERS });
      yield put({
        type: actionTypes.RESUME_OFFER_SUCCESS,
        payload: data.data,
      });
    } else {
      toast.error("Unable to resume Links.");
      yield put({
        type: actionTypes.RESUME_OFFER_FAILURE,
        errorMessage: "Unable to resume Links.",
      });
    }
  } catch (error) {
    toast.error("Unable to resume Links.");
    yield put({
      type: actionTypes.RESUME_OFFER_FAILURE,
      errorMessage: "Unable to resume Links.",
    });
  }
}

function* OffersSaga() {
  yield all([
    takeLatest(actionTypes.GET_OFFERS, getOffersSaga),
    takeLatest(actionTypes.CLONE_OFFER, cloneOfferSaga),
    takeLatest(actionTypes.DELETE_OFFER, deleteOfferSaga),
    takeLatest(actionTypes.DELETE_SELECTED_OFFERS, deleteSelectedOffersSaga),
    takeLatest(actionTypes.PAUSE_OFFER, pasueOfferSaga),
    takeLatest(actionTypes.RESUME_OFFER, resumeOfferSaga),
  ]);
}

export default OffersSaga;
