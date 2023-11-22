import { cache } from "react";
import { api } from "../api";

export const getPets = cache(async () => {
  try {
    const response = await api.get("/pets");

    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getPetsWithFilters = cache(async (filters) => {
  const query = Object.entries(filters)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  try {
    const response = await api.get(`/pets?${query}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
});
