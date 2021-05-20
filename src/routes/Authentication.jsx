import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GoogleSignIn } from "../functions/GoogleSignIn";

import "../styles/routes/Authentication.scss";

function Authentication() {
  const checkLogin = () => {
    const userId = window.sessionStorage.getItem("id");
    const token = window.sessionStorage.getItem("token");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="page">
      <div className="sign-in">
        <GoogleSignIn />

        {/* <div className="sign-in-box">
          <div className="sign-in-box-item">
            <div className="sign-in-box-item__title">ID</div>
            <input
              className="sign-in-box-item__content"
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="sign-in-box-item">
            <div className="sign-in-box-item__title">PW</div>
            <input
              className="sign-in-box-item__content"
              placeholder="비밀번호"
              onChange={(e) => setPw(e.target.value)}
              type="password"
            />
          </div>
        </div>
        <button className="sign-in-button" onClick={signInHandler}>
          로그인
        </button>
      </div>
      <div className="sign-functions">
        <div className="sign-function" onClick={findId}>
          아이디 찾기
        </div>
        <div className="sign-functions-separator">|</div>
        <div className="sign-function" onClick={findPassword}>
          비밀번호 찾기
        </div>
        <div className="sign-functions-separator">|</div>
        <Link to="/authentication/sign-up" className="sign-function">
          회원가입
        </Link> */}
      </div>
    </div>
  );
}

export default Authentication;
