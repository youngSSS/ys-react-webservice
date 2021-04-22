import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutMe from "../components/portfolio/AboutMe";
import Contact from "../components/portfolio/Contact";
import Profile from "../components/portfolio/Profile";
import Skill from "../components/portfolio/Skill";
import Project from "../components/portfolio/Project";
import getPortfolio from "../api/Portfolio";

import "../styles/routes/Portfolio.scss";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState({});

  // useEffect(() => {
  //   getPortfolio().then(({ status, data }) => {
  //     if (status === 200) {
  //       setPortfolioData(data);
  //     } else {
  //       if (status === 404) alert("api 주소를 찾을 수 없습니다.");
  //     }
  //   });
  // }, []);

  return (
    <div className="page">
      <div className="portfolio-btn">
        <Link to="/portfolio/edit" className="portfolio-btn__edit">
          Edit
        </Link>
      </div>

      <div className="portfolio">
        <AboutMe />
        <Profile />
        <Contact />
        <Skill />
        <Project />
      </div>
    </div>
  );
}

export default Portfolio;
