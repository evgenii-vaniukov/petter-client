import { cache } from "react";
import { api } from "../api";

export const getPets = cache(async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error) {
    return error.response;
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
    return error.response;
  }
});

export const getPetById = cache(async (id) => {
  try {
    const response = await api.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
});

export const createPet = async (pet, token) => {
  try {
    const response = await api.post("/pets", pet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updatePet = async (id, pet, token) => {
  try {
    const response = await api.patch(`/pets/${id}`, pet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deletePet = async (id, token) => {
  try {
    const response = await api.delete(`/pets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
