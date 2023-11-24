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
