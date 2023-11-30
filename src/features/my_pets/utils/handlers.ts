import { returnPet } from "@/repository/pet_ownership/pet_ownersip_repository";

export async function returnPetHandler(petID, token) {
  const response = await returnPet(petID, token);
  if (response.status === 200) {
    window.location.reload();
  }
  if (response.status === 400) {
    alert("Bad request");
  }
  if (response.status === 401) {
    alert("Unauthorized");
  }
  if (response.status === 404) {
    alert("Not found");
  }
}
