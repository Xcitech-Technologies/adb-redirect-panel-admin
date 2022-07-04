import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import Dashboard from "./Dashboard/reducer";

const rootReducer = combineReducers({
  authReducer,
  Dashboard,
});

export default rootReducer;
