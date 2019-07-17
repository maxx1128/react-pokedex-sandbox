import axios from "axios";

const apiLimit = 802;

const request = (param1, param2) =>
  axios.get(`https://pokeapi.co/api/v2/${param1}/${param2}`);

export default request;

export { apiLimit };
