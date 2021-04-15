import { Route } from "react-router-dom";

import Welcome from "./routes/Welcome";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Welcome} />
    </div>
  );
}

export default App;
