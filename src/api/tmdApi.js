import axios from "axios";

const globalCall = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default globalCall;
