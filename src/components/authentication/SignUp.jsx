import React, { useState } from "react";
import {
  signUp,
  userIdDupCheck,
  emailDupCheck,
} from "../../api/Authentication";

import "../../styles/components/Authentication.scss";

function SignUp() {
  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const [userIdCheck, setUserIdCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  function passwordCheckHandler(password) {
    setPasswordCheck(password === password ? true : false);
  }

  function signUpHandler() {
    const userData = {
      name: name,
      userId: userId,
      password: password,
      email: email,
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
    userIdDupCheck(userId).then(({ status, code, data }) => {
      if (status === 200) {
        if (code === 200 && data.dupFlag === "false") {
          alert("중복확인이 완료되었습니다.");
        } else {
          alert("이미 존재하는 아이디입니다.");
        }
      } else {
        alert("fail");
      }
    });
  }

  function emailDupCheckHandler() {
    emailDupCheck(email).then(({ status, code, data }) => {
      if (status === 200) {
        if (code === 200 && data.dupFlag === "false") {
          alert("중복확인이 완료되었습니다.");
        } else {
          alert("이미 존재하는 이메일입니다.");
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">비밀번호 확인</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => passwordCheckHandler(e.target.value)}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">이메일</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="sign-up-item__dup-check"
            onClick={emailDupCheckHandler}
          >
            중복확인
          </div>
        </div>
      </div>

      <div className="sign-up-footer" onClick={signUpHandler}>
        회원가입
      </div>
    </div>
  );
}

export default SignUp;
