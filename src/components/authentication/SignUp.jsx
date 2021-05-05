import React, { useState } from "react";
import {
  signUp,
  userIdDupCheck,
  emailDupCheck,
} from "../../api/Authentication";

import "../../styles/components/Authentication.scss";

function SignUp() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [nameCheck, setNameCheck] = useState(false);
  const [userIdCheck, setUserIdCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  function signUpHandler() {
    if (nameCheck && userIdCheck && passwordCheck && emailCheck) {
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
    } else {
      if (!nameCheck) alert("이름은 필수 입력 값 입니다.");
      else if (!userIdCheck) alert("아이디 중복 확인을 진행해주세요.");
      else if (!passwordCheck) alert("비밀번호 확인을 진행해주세요.");
      else if (!emailCheck) alert("이메일 중복 확인을 진행해주세요.");
    }
  }

  function userIdDupCheckHandler() {
    if (userId === "") {
      alert("ID를 입력해주세요.");
      return;
    }

    userIdDupCheck(userId).then(({ status, code, data }) => {
      if (status === 200) {
        if (code === 200 && data.dupFlag === "false") {
          alert("중복확인이 완료되었습니다.");
          setUserIdCheck(true);
        } else {
          alert("이미 존재하는 아이디입니다.");
          setUserIdCheck(false);
        }
      } else {
        alert("fail");
      }
    });
  }

  function emailDupCheckHandler() {
    if (email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    emailDupCheck(email).then(({ status, code, data }) => {
      if (status === 200) {
        if (code === 200 && data.dupFlag === "false") {
          alert("중복확인이 완료되었습니다.");
          setEmailCheck(true);
        } else {
          alert("이미 존재하는 이메일입니다.");
          setEmailCheck(false);
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
            onChange={(e) => {
              setName(e.target.value);
              setNameCheck(e.target.value === "" ? false : true);
            }}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">아이디</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => {
              setUserId(e.target.value);
              setUserIdCheck(false);
            }}
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">비밀번호 확인</div>
          <input
            className="sign-up-item__content"
            type="password"
            onChange={(e) => setPasswordCheck(password === e.target.value)}
          />
          <div>
            {passwordCheck
              ? "비밀번호가 일치합니다."
              : "비밀번호가 일치하지 않습니다."}
          </div>
        </div>

        <div className="sign-up-item">
          <div className="sign-up-item__title">이메일</div>
          <input
            className="sign-up-item__content"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailCheck(false);
            }}
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
