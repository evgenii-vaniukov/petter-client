import { api } from "../api";
export function getUserPets(token: string) {
  try {
    const response = api.get(`/user/pets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response.status;
  }
}
