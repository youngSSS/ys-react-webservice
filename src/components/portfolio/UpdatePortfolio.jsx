import React, { useState } from "react";
import { UpdatePreview } from "./UpdatePreview";
import "../../styles/components/UpdatePortfolio.scss";

function UpdatePortfolio() {
  const [aboutMe, setAboutMe] = useState("");
  const [profile, setProfile] = useState("");
  const [contact, setContact] = useState("");
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState("");

  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="page">
      <div className="markdown-preview">
        <div
          className="markdown-preview__button"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "돌아가기" : "미리보기"}
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
          />
        </div>
      </div>

      {showPreview && (
        <>
          <div className="update-preview">미리보기</div>

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
