import { Provider } from "react-redux";
import store from "../store";
import Routes from "./setup/Routes";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
