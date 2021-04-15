import { Route, Switch } from "react-router-dom";

import Welcome from "./routes/Welcome";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="" />
      </Switch>
    </div>
  );
}

export default App;
