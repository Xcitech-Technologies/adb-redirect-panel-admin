import { put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import API from "../../Axios/Axios";

function* getGlobalConditionsSaga() {
  try {
    yield put({ type: actionTypes.SET_GLOBAL_CONDITIONS_LOADING });
    const { data } = yield API.get("/getglobalconditions");
    if (data.success) {
      yield put({
        type: actionTypes.GET_GLOBAL_CONDITIONS_SUCCESS,
        payload: data.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_GLOBAL_CONDITIONS_FAILURE,
        errorMessage: data.data,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_GLOBAL_CONDITIONS_FAILURE,
      errorMessage: "Unable to global conditions data.",
    });
  }
}

function* updateGlobalConditionsSaga({ object }) {
  try {
    yield put({ type: actionTypes.SET_GLOBAL_CONDITIONS_LOADING });
    const { data } = yield API.post("/globalconditions", object);
    if (data.success) {
      toast.success("Updated Successfully");
      yield put({
        type: actionTypes.UPDATE_GLOBAL_CONDITIONS_SUCCESS,
        payload: data.data,
      });
      yield put({ type: actionTypes.GET_GLOBAL_CONDITIONS });
    } else {
      throw Error;
    }
  } catch (error) {
    toast.error("Unable to Update");
    yield put({
      type: actionTypes.UPDATE_GLOBAL_CONDITIONS_FAILURE,
      errorMessage: "Unable to update conditions.",
    });
  }
}

function* GlobalConditionsSaga() {
  yield all([
    takeLatest(actionTypes.GET_GLOBAL_CONDITIONS, getGlobalConditionsSaga),
    takeLatest(
      actionTypes.UPDATE_GLOBAL_CONDITIONS,
      updateGlobalConditionsSaga
    ),
  ]);
}

export default GlobalConditionsSaga;
