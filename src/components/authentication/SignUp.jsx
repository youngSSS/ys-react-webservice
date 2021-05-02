import React, { useState } from "react";
import { signUp, userIdDupCheck } from "../../api/Authentication";

import "../../styles/components/Authentication.scss";

function SignUp() {
  const [username, setUsername] = useState();
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [userEmail, setUserEmail] = useState();

  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  function passwordCheck(password) {
    setPwCheck(userPw === password ? true : false);
  }

  function signUpHandler() {
    const userData = {
      name: username,
      userId: userId,
      password: userPw,
      email: userEmail,
    };

    signUp(userData).then(({ status }) => {
      if (status === 200) {
        alert("Complete");
      } else {
        alert("fail");
      }
    });
  }

  function userIdDupCheckHandler() {
    userIdDupCheck(userId).then(({ status, data }) => {
      if (status === 200) {
        if (data) {
          alert("이미 존재하는 아이디입니다.");
        } else {
          alert("중복확인이 완료되었습니다.");
        }
      } else {
        alert("fail");
      }
    });
  }

  return (
    <div className="page">
      <div className="sign-up-header">Sign Up</div>
      <div className="sign-up-body">
        <div className="sign-up-item">
          <div className="sign-up-item__title">이름</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">아이디</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => setUserId(e.target.value)}
          />
          <div
            className="sign-up-item__dup-check"
            onClick={userIdDupCheckHandler}
          >
            중복확인
          </div>
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">비밀번호</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => setUserPw(e.target.value)}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">비밀번호 확인</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => passwordCheck(e.target.value)}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">이메일</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="sign-up-footer" onClick={signUpHandler}>
        회원가입
      </div>
    </div>
  );
}

export default SignUp;
