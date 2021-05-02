import axios from "axios";
const url = process.env.SERVER_URL;

async function signUp(data) {
  let status;

  await axios
    .post("http://192.168.0.106:8080/api/authentication/sign-up", {
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
  let status, data;

  await axios
    .get("http://192.168.0.106:8080/api/authentication/id-dup-check/" + userId)
    .then((res) => {
      ({ status, data } = res);
    });

  return { status, data };
}

export { signUp, userIdDupCheck };
