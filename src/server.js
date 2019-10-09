import axios from "axios";

const apiHost = "http://localhost:8080"

const api = axios.create({
  baseURL: `${apiHost}/api`
});

export default api;