import { put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import API from "../../Axios/Axios";

function* getOffersSaga({ params }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = params
      ? yield API.post(
          "https://multihostingreviews.com/dashboard/api/searchLink",
          params
        )
      : yield API.get(
          "https://multihostingreviews.com/dashboard/api/links/true"
        );

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

function* getOfferDetailsSaga({ id }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.get(
      `https://multihostingreviews.com/dashboard/api/link/${id}`
    );

    if (data.success) {
      yield put({
        type: actionTypes.GET_OFFER_DETAILS_SUCCESS,
        payload: data.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_OFFER_DETAILS_FAILURE,
        errorMessage: "Unable to load Offer detail.",
      });
    }
  } catch (error) {
    toast.error("Unable to load Offer details.");
    yield put({
      type: actionTypes.GET_OFFER_DETAILS_FAILURE,
      errorMessage: "Unable to load Offer detail.",
    });
  }
}

function* cloneOfferSaga({ id }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.get(
      `https://multihostingreviews.com/dashboard/api/cloneLink/${id}`
    );

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
    const { data } = yield API.post(
      `https://multihostingreviews.com/dashboard/api/deleteLink/${id}`
    );

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
    const { data } = yield API.post(
      `https://multihostingreviews.com/dashboard/api/multiple/deleteLink`,
      links
    );

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
    const { data } = yield API.post(
      `https://multihostingreviews.com/dashboard/api/multiple/pauseLink`,
      links
    );

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
    const { data } = yield API.post(
      `https://multihostingreviews.com/dashboard/api/multiple/resumeLink`,
      links
    );

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
function* toggleOfferSaga({ obj }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(
      `https://multihostingreviews.com/dashboard/api/linkstatus/${obj.id}`,
      obj
    );

    if (data.success) {
      yield put({ type: actionTypes.GET_OFFERS });
      yield put({
        type: actionTypes.TOGGLE_OFFER_SUCCESS,
        payload: "Successful",
      });
    } else {
      toast.error("Unable to toggle Links.");
      yield put({
        type: actionTypes.TOGGLE_OFFER_FAILURE,
        errorMessage: "Unable to toggle Link.",
      });
    }
  } catch (error) {
    toast.error("Unable to resume Links.");
    yield put({
      type: actionTypes.TOGGLE_OFFER_FAILURE,
      errorMessage: "Unable to toggle Link.",
    });
  }
}

function* addOfferSaga({ obj }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(
      "https://multihostingreviews.com/dashboard/api/link",
      obj
    );

    if (data.success) {
      toast.success("Added offer successfully");
      yield put({
        type: actionTypes.ADD_OFFER_SUCCESS,
        payload: data.data,
      });
    } else {
      toast.error(data.data.message);
      yield put({
        type: actionTypes.ADD_OFFER_FAILURE,
        errorMessage: data.data.message,
      });
    }
  } catch (error) {
    toast.error("Unable to add Offer.");
    yield put({
      type: actionTypes.ADD_OFFER_FAILURE,
      errorMessage: "Unable to add Offer.",
    });
  }
}
function* editOfferSaga({ obj, id }) {
  try {
    yield put({ type: actionTypes.SET_OFFERS_LOADING });
    const { data } = yield API.post(
      `https://multihostingreviews.com/dashboard/api/link/${id}`,
      obj
    );

    if (data.success) {
      toast.success("Edited offer successfully");
      yield put({
        type: actionTypes.EDIT_OFFER_SUCCESS,
        payload: data.data,
      });
    } else {
      toast.error(data.data.message);
      yield put({
        type: actionTypes.EDIT_OFFER_FAILURE,
        errorMessage: data.data.message,
      });
    }
  } catch (error) {
    toast.error("Unable to edit Offer.");
    yield put({
      type: actionTypes.EDIT_OFFER_FAILURE,
      errorMessage: "Unable to edit Offer.",
    });
  }
}

function* OffersSaga() {
  yield all([
    takeLatest(actionTypes.GET_OFFERS, getOffersSaga),
    takeLatest(actionTypes.GET_OFFER_DETAILS, getOfferDetailsSaga),
    takeLatest(actionTypes.CLONE_OFFER, cloneOfferSaga),
    takeLatest(actionTypes.DELETE_OFFER, deleteOfferSaga),
    takeLatest(actionTypes.DELETE_SELECTED_OFFERS, deleteSelectedOffersSaga),
    takeLatest(actionTypes.PAUSE_OFFER, pasueOfferSaga),
    takeLatest(actionTypes.TOGGLE_OFFER, toggleOfferSaga),
    takeLatest(actionTypes.RESUME_OFFER, resumeOfferSaga),
    takeLatest(actionTypes.ADD_OFFER, addOfferSaga),
    takeLatest(actionTypes.EDIT_OFFER, editOfferSaga),
  ]);
}

export default OffersSaga;
