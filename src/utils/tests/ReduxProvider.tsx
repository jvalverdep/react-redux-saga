import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { IRootState } from "../../common/interfaces/root-state";
import rootReducer from "../../store/reducers";

interface OwnProps {
  initialState?: Partial<IRootState>;
  store?: Store;
}

const ReduxProvider: React.FC<OwnProps> = ({
  children,
  initialState,
  store = createStore(rootReducer, initialState),
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
