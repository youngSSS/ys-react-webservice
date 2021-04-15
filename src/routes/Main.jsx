import { Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Board from "./Board";
import NotFound from "../components/utils/NotFound";

function Main() {
  return (
    <div className="main">
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/board" component={Board} />
      <Route component={NotFound} />
    </div>
  );
}

export default Main;
