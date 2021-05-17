import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const url = process.env.REACT_APP_SERVER_URL;
const googleUri = process.env.REACT_APP_GOOGLE_URI;

function GoogleSignIn(props) {
  async function responseGoogle(data) {
    console.log(data);
    await axios
      .post(url + "/api/login", {
        name: data.profileObj.name,
        email: data.profileObj.email,
        picture: data.profileObj.imageUrl,
        token: data.accessToken,
        role: "USER",
      })
      .then((res) => {
        console.log(res);
        window.sessionStorage.setItem("id", res.data.email);
        window.sessionStorage.setItem("name", res.data.name);
        window.sessionStorage.setItem("role", res.data.role);
        window.sessionStorage.setItem("token", res.data.token);
        console.log(window.sessionStorage);
      })
      .catch((error) => {
        // if (error.response) status = error.response.status;
      });
  }

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export { GoogleSignIn };
