import { api } from "../api";

export async function adoptPet(id, token) {
  try {
    const response = await api.post(
      `/pets/${id}/adopt`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return { status: response.status };
  } catch (error) {
    return { status: error.response.status };
  }
}

export function returnPet(petID: string, token: string) {
  try {
    const response = api.post(
      `/pets/${petID}/return`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error.response.status;
  }
}

export function savePet(id, token) {
  try {
    const response = api.post(
      `/pets/${id}/save`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error.response.status;
  }
}
