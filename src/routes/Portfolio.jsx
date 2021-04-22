import React, { useEffect, useState } from "react";
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
    <div className="page page--type-portfolio">
      <div className="portfolio-btn">
        <div className="portfolio-btn__edit">Edit</div>
      </div>
      <div className="portfolio"></div>
    </div>
  );
}

export default Portfolio;
