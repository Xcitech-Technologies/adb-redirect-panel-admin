import axios from "axios";

export const BASE_URL =
  process.env.REACT_APP_MODE === "local"
    ? "http://localhost:5010"
    : "https://projects.xcitech.in:5010";

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((request) => {
  if (request.url.endsWith("login")) return request;

  const token = localStorage.getItem("token");
  request.headers["access-token"] = token;
  request.headers["Content-Type"] = "application/json";

  return request;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

export default API;
