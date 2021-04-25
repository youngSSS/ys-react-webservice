import { Route, Switch } from "react-router-dom";
import NavigationBar from "../components/utils/NavigationBar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Board from "./Board";
import Authentication from "./Authentication";
import NotFound from "../components/utils/NotFound";

import UpdatePortfolio from "../components/portfolio/UpdatePortfolio";
import SignUp from "../components/authentication/SignUp";

import "../styles/routes/Main.scss";
import "../styles/routes/Page.scss";

function Main() {
  return (
    <div className="master-wrapper">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />

        {/* Home */}
        <Route path="/home" component={Home} />

        {/* Portfolio */}
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/edit" component={UpdatePortfolio} />

        {/* Board */}
        <Route path="/board" component={Board} />

        {/* Authentication */}
        <Route exact path="/authentication" component={Authentication} />
        <Route path="/authentication/sign-up" component={SignUp} />

        {/* Not Found */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
