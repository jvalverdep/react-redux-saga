import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../../components/Home";
import Layout from "../../components/Layout";
import { RandomPlayerContainer, CounterContainer } from "../../containers";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={() => (
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/random-player"
                  component={RandomPlayerContainer}
                />
                <Route exact path="/counter" component={CounterContainer} />
              </Switch>
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
