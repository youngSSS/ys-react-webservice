import axios from "axios";
const url = process.env.SERVER_URL;

async function signUp(data) {
  let status;

  // await axios({
  //   method: "POST",
  //   url: "http://172.30.1.38:8080/api/sign/sign-up",
  //   headers: {
  //     "content-type": "text/html",
  //   },
  //   body: {
  //     ...data,
  //   },
  // })
  await axios
    .post("http://172.30.1.38:8080/api/authentication/sign-up", {
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

export { signUp };
