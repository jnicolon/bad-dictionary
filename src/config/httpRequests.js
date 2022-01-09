import axios from "axios";

export const baseURL = `https://bad-dictionary.herokuapp.com/api`;
// const baseURL = `https://localhost:5000/api`;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
