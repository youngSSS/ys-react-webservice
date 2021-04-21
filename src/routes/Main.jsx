import { Route, Switch } from "react-router-dom";
import NavigationBar from "../components/utils/NavigationBar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Board from "./Board";
import Authentication from "./Authentication";
import NotFound from "../components/utils/NotFound";

import "../styles/routes/Main.scss";
import "../styles/routes/Page.scss";

function Main() {
  return (
    <div className="master-wrapper">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/board" component={Board} />
        <Route path="/authentication" component={Authentication} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
