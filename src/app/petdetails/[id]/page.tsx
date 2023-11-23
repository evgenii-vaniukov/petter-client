import { PetPage } from "@/features/pet_details/index";
import { getPetById } from "@/repository/pet/pet_repository";
export default function PetDetails({ params: { id } }) {
  const pet = getPetById(id);
  return <PetPage pet={pet} />;
}
