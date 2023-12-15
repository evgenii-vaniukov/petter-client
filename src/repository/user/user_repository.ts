import { api } from "../api";

export function getUserAdoptedPets(token: string) {
  try {
    const response = api.get(`/user/pets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export function getUserSavedPets(token: string) {
  try {
    const response = api.get(`/user/pets/saved`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
export async function updateUserDetails(token: string, data: any) {
  try {
    const response = await api.put(`/user/details`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(token);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function updateUserPassword(token: string, data: any) {
  try {
    const response = await api.put(`/user/password`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
