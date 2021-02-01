import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:51552/api",
  headers: {
    "Content-type": "application/json"
  }
});