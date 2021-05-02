import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

async function getPortfolio() {
  let status, data;

  await axios
    .get(url + "/api/portfolio")
    .then((res) => {
      status = res.status;
      data = res.data;
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, data };
}

export default getPortfolio;
