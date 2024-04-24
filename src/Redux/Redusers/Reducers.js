import {combineReducers} from "redux";
import incrementReducer from "./incrementReducer";
import decrementReducer from "./decrementReducer";

const rootReducers = combineReducers({
  increment:incrementReducer,
  decrement:decrementReducer
})
export default rootReducers
