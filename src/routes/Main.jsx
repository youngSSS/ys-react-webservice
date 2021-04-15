import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Board from "./Board";
import NotFound from "../components/utils/NotFound";
import NavigationBar from "../components/utils/NavigationBar";
import "../styles/routes/Main.scss";

function Main() {
  return (
    <div className="main-wrapper">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/board" component={Board} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
