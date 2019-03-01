import { combineReducers } from 'redux';
import signupReducer from './signupReducer'
// import errorReducer from "./ErrorReducer";


const mainReducer = combineReducers({
  signup: signupReducer,
  // errorReducer,
});
export default mainReducer;

