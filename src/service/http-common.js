import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:53973",
  headers: {
    "Content-type": "application/json"
  }
});