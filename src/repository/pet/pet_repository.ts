import { cache } from "react";
import { api } from "../api";

export const getPets = cache(async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error) {
    console.error("There was an error!");
  }
});

export const getPetsWithFilters = cache(async (filters) => {
  let query = "";
  for (const [key, value] of Object.entries(filters)) {
    for (const v of value as Array<String>) {
      query += `${key}=${v}&`;
    }
  }
  try {
    const response = await api.get(`/pets?${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getPetById = cache(async (id) => {
  try {
    const response = await api.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
