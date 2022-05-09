
import axios from "axios";

export const API_URL = `https://alexbooks.bannikon.fvds.ru/designer`;

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
