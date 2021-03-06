// Root reducer combining all the reducers

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
