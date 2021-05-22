import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPortfolio } from "../api/Portfolio";
import { Markdown } from "../components/utils/Markdown";

import "../styles/routes/Portfolio.scss";

function Portfolio() {
  const portfolioId = 1;
  const [portfolio, setPortfolio] = useState({
    aboutMe: "",
    profile: "",
    contact: "",
    skill: "",
    project: "",
  });

  useEffect(() => {
    getPortfolio(portfolioId).then(({ code, data }) => {
      if (code === 200) {
        setPortfolio(data);
      }
    });
  }, []);

  return (
    <div className="page">
      <div className="portfolio-btn">
        <Link to="/portfolio/edit" className="portfolio-btn__edit">
          Edit
        </Link>
      </div>

      <div className="portfolio">
        <div className="portfolio__about-me">
          <div className="portfolio__title">About Me</div>
          <div className="portfolio__content">
            <Markdown text={portfolio.aboutMe} />
          </div>
        </div>

        <div className="portfolio__profile">
          <div className="portfolio__title">Profile</div>
          <div className="portfolio__content">
            <Markdown text={portfolio.profile} />
          </div>
        </div>

        <div className="portfolio__contact">
          <div className="portfolio__title">Contact</div>
          <div className="portfolio__content">
            <Markdown text={portfolio.contact} />
          </div>
        </div>

        <div className="portfolio__skill">
          <div className="portfolio__title">Skill</div>
          <div className="portfolio__content">
            <Markdown text={portfolio.skill} />
          </div>
        </div>

        <div className="portfolio__project">
          <div className="portfolio__title">Project</div>
          <div className="portfolio__content">
            <Markdown text={portfolio.project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
