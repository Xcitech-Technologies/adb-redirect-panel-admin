import { fork, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import API from "../../Axios/Axios";

function* loginSaga({ payload }) {
  try {
    yield put({ type: actionTypes.SET_AUTH_LOADING });
    const { data } = yield API.post(
      "https://multihostingreviews.com/dashboard/api/firebase/login",
      payload
    );
    if (data.success) {
      yield put({ type: actionTypes.LOGIN_SUCCESS, payload: data.data.token });
      toast.success("Login Successfull.");
    } else {
      yield put({
        type: actionTypes.LOGIN_FAILURE,
        payload: data.data.message,
      });
      toast.error("Please check your email and password.");
    }
  } catch (error) {
    toast.error("Please check your email and password.");
    yield put({
      type: actionTypes.LOGIN_FAILURE,
      payload: "Unable to login",
    });
  }
}

export function* watchLogin() {
  yield takeLatest(actionTypes.LOGIN, loginSaga);
}

function* authSaga() {
  yield all([fork(watchLogin)]);
}

export default authSaga;
