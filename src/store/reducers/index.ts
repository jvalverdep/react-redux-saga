import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import playerReducer from "./player/reducer";

const rootReducer = combineReducers({
  counterReducer,
  playerReducer,
});

export default rootReducer;
