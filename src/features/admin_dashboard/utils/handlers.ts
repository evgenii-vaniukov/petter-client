import { deletePet } from "@/repository/pet/pet_repository";

export async function handleDeletePet(id, token) {
  const response = await deletePet(id, token);
  if (response.status === 200) {
    window.location.reload();
  }
  if (response.status === 400) {
    alert("Bad request");
  }
  if (response.status === 401) {
    alert("Unauthorized");
  }
}
