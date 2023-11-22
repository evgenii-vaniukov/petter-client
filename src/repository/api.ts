import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_API_URL
    : process.env.PROD_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
