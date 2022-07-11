import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import Dashboard from "./Dashboard/reducer";
import Offers from "./Offers/reducer";
import GlobalConditions from "./GlobalConditions/reducer";

const rootReducer = combineReducers({
  authReducer,
  Dashboard,
  Offers,
  GlobalConditions,
});

export default rootReducer;
