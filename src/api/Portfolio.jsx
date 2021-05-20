import axios from "axios";
const url = process.env.REACT_APP_SERVER_URL;

async function postPortfolio(portfolio) {
  let status, code, data, message;

  await axios
    .post(url + "/api/portfolio", portfolio)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

async function putPortfolio(portfolioId, portfolio) {
  let status, code, data, message;

  await axios
    .put(url + "/api/portfolio/" + portfolioId, portfolio)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

async function getPortfolio(portfolioId) {
  let status, code, data, message;

  await axios
    .get(url + "/api/portfolio/" + portfolioId)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

async function deletePortfolio(portfolioId) {
  let status, code, data, message;

  await axios
    .delete(url + "/api/portfolio/" + portfolioId)
    .then((res) => {
      status = res.status;
      ({ code, data, message } = res.data);
    })
    .catch((error) => {
      if (error.response) status = error.response.status;
    });

  return { status, code, data, message };
}

export { postPortfolio, putPortfolio, getPortfolio, deletePortfolio };
