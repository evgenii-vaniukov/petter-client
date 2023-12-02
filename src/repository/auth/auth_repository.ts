import { cache } from "react";
import { api } from "../api";

export const login = cache(async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    return error.response;
  }
});

export const signup = cache(
  async (email, password, passwordMatch, firstName, lastName, phoneNumber) => {
    try {
      const response = await api.post("/signup", {
        email,
        password,
        passwordMatch,
        firstName,
        lastName,
        phoneNumber,
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  },
);
