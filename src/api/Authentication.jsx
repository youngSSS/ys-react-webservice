import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

async function signUp(data) {
  let status;

  await axios
    .post(url + "/api/authentication/sign-up", {
      ...data,
    })
    .then((res) => {
      console.log(res);
      status = res.status;
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status };
}

async function userIdDupCheck(userId) {
  let status, code, data;

  await axios
    .get(url + "/api/authentication/id-dup-check/" + userId)
    .then((res) => {
      status = res.status;
      ({ code, data } = res.data);
    });

  return { status, code, data };
}

async function emailDupCheck(email) {
  let status, code, data;

  await axios
    .get(url + "/api/authentication/email-dup-check/" + email)
    .then((res) => {
      status = res.status;
      ({ code, data } = res.data);
    });

  return { status, code, data };
}

export { signUp, userIdDupCheck, emailDupCheck };
