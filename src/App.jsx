import { Route, Switch } from "react-router-dom";
import Main from "./routes/Main";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
