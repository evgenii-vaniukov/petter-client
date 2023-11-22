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
  // const query = Object.entries(filters)
  //   .map(([key, value]) => `${key}=${value[0]}`)
  //   .join("&");
  const query = "type=dog&adoptionStatus=true";

  try {
    const response = await api.get(`/pets`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
