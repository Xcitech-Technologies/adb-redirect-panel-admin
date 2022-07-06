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

function* OffersSaga() {
  yield all([takeLatest(actionTypes.GET_OFFERS, getOffersSaga)]);
}

export default OffersSaga;
