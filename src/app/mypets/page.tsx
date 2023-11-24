import { MyPets } from "@/features/my_pets/index";
import { getPets } from "@/repository/pet/pet_repository";

export default async function MyPetsPage() {
  const pets = await getPets();
  return <MyPets pets={pets} />;
}
