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
      .then((res) => {})
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
