import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Link to="/" className="nav-header">
        YS
      </Link>
      <div className="nav-body">
        <div className="nav-list">
          <Link to="/home" className="nav-list__item">
            Home
          </Link>
          <Link to="/portfolio" className="nav-list__item">
            Portfolio
          </Link>
          <Link to="/board" className="nav-list__item">
            Board
          </Link>
          <Link to="/authentication" className="nav-list__item">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
