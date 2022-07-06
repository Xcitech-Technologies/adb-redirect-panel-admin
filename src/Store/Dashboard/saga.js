import { put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import API from "../../Axios/Axios";

function* getDashboardSaga({ sort }) {
  try {
    // yield put({ type: actionTypes.SET_AUTH_LOADING });
    const { data } = yield API.get(
      `/getDashboard${sort ? `?sort=${sort}` : ""}`,
      {
        headers: {
          "access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEp1bCAwNCAyMDIyIDEzOjA1OjA0IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1aWQiOiJYQVFQTUVQa2F4WU9tYzNDaWxUVEdBTll3OTIzIiwiaWF0IjoxNjU2OTM5OTA0fQ.4x4gTeB2pnO5mQGffmLKucnjfP7UgUfh0DYZKHstPaA",
        },
      }
    );

    yield put({
      type: actionTypes.GET_DASHBOARD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_DASHBOARD_FAILURE,
      errorMessage: "Unable to load dashboard data.",
    });
  }
}

function* DashboardSaga() {
  yield all([takeLatest(actionTypes.GET_DASHBOARD, getDashboardSaga)]);
}

export default DashboardSaga;
