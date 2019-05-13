import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import hotels from "./hotels";

export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  hotels:hotels
});
