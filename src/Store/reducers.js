import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import Dashboard from "./Dashboard/reducer";
import Offers from "./Offers/reducer";

const rootReducer = combineReducers({
  authReducer,
  Dashboard,
  Offers,
});

export default rootReducer;
