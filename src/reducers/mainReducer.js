import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import signinReducer from "./signinReducer";

const mainReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer
});

export default mainReducer;
