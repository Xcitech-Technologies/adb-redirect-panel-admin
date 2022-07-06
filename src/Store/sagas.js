import { all } from "redux-saga/effects";

import AuthSaga from "./Auth/saga";
import DashboardSaga from "./Dashboard/saga";
import OffersSaga from "./Offers/saga";

export default function* rootSaga() {
  yield all([AuthSaga(), DashboardSaga(), OffersSaga()]);
}
