
import axios from "axios";

export const API_URL = `https://alexbooks.pro/designer`;

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
