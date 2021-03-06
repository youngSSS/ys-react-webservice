import React, { useState, useEffect } from "react";
import { UpdatePreview } from "./UpdatePreview";
import {
  postPortfolio,
  putPortfolio,
  getPortfolio,
  deletePortfolio,
} from "../../api/Portfolio";

import "../../styles/components/UpdatePortfolio.scss";

function UpdatePortfolio() {
  const [portfolio, setPortfolio] = useState({
    aboutMe: "",
    profile: "",
    contact: "",
    skill: "",
    project: "",
  });
  const [aboutMe, setAboutMe] = useState("");
  const [profile, setProfile] = useState("");
  const [contact, setContact] = useState("");
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState("");

  const [showPreview, setShowPreview] = useState(false);
  const [portfolioExistenceFlag, setPortfolioExistenceFlag] = useState(false);

  const portfolioId = 1;

  const saveHandler = () => {
    // CASE: PUT
    if (portfolioExistenceFlag) {
      putPortfolio(portfolioId, portfolio).then(({ code, message }) => {
        alert(message);
      });
    }
    // CASE: POST
    else {
      postPortfolio(portfolio).then(({ code, message }) => {
        if (code === 200) {
          setPortfolioExistenceFlag(true);
        }
        alert(message);
      });
    }
  };

  const deleteHandler = () => {
    deletePortfolio(portfolioId).then(({ code, message }) => {
      if (code === 200) {
        setAboutMe("");
        setProfile("");
        setContact("");
        setSkill("");
        setProject("");

        setPortfolioExistenceFlag(false);
      }

      alert(message);
    });
  };

  useEffect(() => {
    getPortfolio(portfolioId).then(({ code, data, message }) => {
      if (code === 200) {
        setAboutMe(data.aboutMe);
        setProfile(data.profile);
        setContact(data.contact);
        setSkill(data.skill);
        setProject(data.project);

        setPortfolioExistenceFlag(true);
      }
    });
  }, []);

  useEffect(() => {
    setPortfolio({
      aboutMe: aboutMe,
      profile: profile,
      contact: contact,
      skill: skill,
      project: project,
    });
  }, [aboutMe, profile, contact, skill, project]);

  return (
    <div className="page">
      <div className="markdown-preview">
        <div
          className="markdown-preview__button"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "????????????" : "????????????"}
        </div>

        <div
          className="markdown-preview__button"
          onClick={deleteHandler}
          style={{ margin: "0 10px 0 0" }}
        >
          ??????
        </div>

        <div
          className="markdown-preview__button"
          onClick={saveHandler}
          style={{ margin: "0 10px 0 0" }}
        >
          ??????
        </div>
      </div>

      <div className="update-about-me">
        <div className="update-about-me__left">
          <div className="update-title">About Me</div>
        </div>

        <div className="update-about-me__right">
          <textarea
            className="update-about-me__input"
            onChange={(e) => setAboutMe(e.target.value)}
            value={aboutMe || ""}
          />
        </div>
      </div>

      <div className="update-profile">
        <div className="update-profile__left">
          <div className="update-title">Profile</div>
        </div>

        <div className="update-profile__right">
          <textarea
            className="update-profile__input"
            onChange={(e) => setProfile(e.target.value)}
            value={profile || ""}
          />
        </div>
      </div>

      <div className="update-contact">
        <div className="update-contact__left">
          <div className="update-title">Contact</div>
        </div>

        <div className="update-contact__right">
          <textarea
            className="update-contact__input"
            onChange={(e) => setContact(e.target.value)}
            value={contact || ""}
          />
        </div>
      </div>

      <div className="update-skill">
        <div className="update-skill__left">
          <div className="update-title">Skill</div>
        </div>

        <div className="update-skill__right">
          <textarea
            className="update-skill__input"
            onChange={(e) => setSkill(e.target.value)}
            value={skill || ""}
          />
        </div>
      </div>

      <div className="update-project">
        <div className="update-project__left">
          <div className="update-title">Project</div>
        </div>

        <div className="update-project__right">
          <textarea
            className="update-project__input"
            onChange={(e) => setProject(e.target.value)}
            value={project || ""}
          />
        </div>
      </div>

      {showPreview && (
        <>
          <div className="update-preview">????????????</div>

          <div className="update-about-me">
            <div className="update-about-me__left">
              <div className="update-title">About Me</div>
            </div>

            <div className="update-about-me__right">
              <UpdatePreview text={aboutMe} />
            </div>
          </div>

          <div className="update-profile">
            <div className="update-profile__left">
              <div className="update-title">Profile</div>
            </div>

            <div className="update-profile__right">
              <UpdatePreview text={profile} />
            </div>
          </div>

          <div className="update-contact">
            <div className="update-contact__left">
              <div className="update-title">Contact</div>
            </div>

            <div className="update-contact__right">
              <UpdatePreview text={contact} />
            </div>
          </div>

          <div className="update-skill">
            <div className="update-skill__left">
              <div className="update-title">Skill</div>
            </div>

            <div className="update-skill__right">
              <UpdatePreview text={skill} />
            </div>
          </div>

          <div className="update-project">
            <div className="update-project__left">
              <div className="update-title">Project</div>
            </div>

            <div className="update-project__right">
              <UpdatePreview text={project} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UpdatePortfolio;
