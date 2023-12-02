import { Home } from "@/features/homepage/index";
import { getPets } from "@/repository/pet/pet_repository";

export default async function HomePage() {
  const pets = await getPets();
  return <Home pets={pets} />;
}
