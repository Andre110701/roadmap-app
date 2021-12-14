import { combineReducers } from "redux";
import moduleListReducer from "./moduleListReducer";
import playListReducer from "./playListReducer";
/* import videoReducer from './videoReducer'; */

const rootReducers = combineReducers({
  moduleListReducer, playListReducer, /* videoReducer */
})
export default rootReducers;

