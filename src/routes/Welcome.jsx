import React from "react";
import { Link } from "react-router-dom";

import "../styles/routes/Welcome.scss";

import WelcomeBackground from "../images/welcome-background.jpeg";

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="welcome-comment">Web</div>
      <Link className="welcome-button" to="/home">
        Home
      </Link>
      {/* <img className="welcome-background" src={WelcomeBackground} alt="welcome-background" /> */}
    </div>
  );
}

export default Welcome;
