import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import sagaMiddleware from "./middlewares/sagas";
import rootPlayers from "./reducers/player/sagas";

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootPlayers);

export default store;
