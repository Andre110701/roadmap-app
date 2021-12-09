import { combineReducers } from "redux"
import moduleListReducer from "./moduleListReducer"
import playListReducer from "./playListReducer"

const rootReducers = combineReducers({
  moduleListReducer, playListReducer
})
export default rootReducers;

