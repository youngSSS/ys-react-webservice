import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Link className="nav-header" to="/">
        YS
      </Link>
      <div className="nav-body">
        <div className="nav-list">
          <Link className="nav-list__item" to="/home">
            Home
          </Link>
          <Link className="nav-list__item" to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-list__item" to="/board">
            Board
          </Link>
          <Link className="nav-list__item" to="/authentication">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
