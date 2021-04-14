import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/routes/Main.scss";

import MainBackground from "../images/main-background.jpeg";

function Main() {
  const history = useHistory();
  return (
    <div className="main">
      <div className="welcome-comment">YS Web</div>
      <button className="main-button" onClick={() => history.push("/Home")}>
        Home
      </button>
      <img
        className="main-background"
        src={MainBackground}
        alt="main-background"
      />
    </div>
  );
}

export default Main;
