import { cache } from "react";
import { api } from "../api";

export const login = cache(async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return {
      status: response.status,
      token: response.data.token,
    };
  } catch (error) {
    console.error("There was an error!");
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
      return {
        status: response.status,
        token: response.data.token,
      };
    } catch (error) {
      console.error("There was an error!");
    }
  },
);
