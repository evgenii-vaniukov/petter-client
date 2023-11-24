import { api } from "../api";

export async function adoptPet(id) {
  try {
    const response = await api.get(`${id}/adopt`);
    return { status: response.status };
  } catch (error) {
    console.error(error);
  }
}
