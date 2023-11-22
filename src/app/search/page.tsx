import { Search } from "@/features/search/index";
import { getPets } from "@/repository/pet/pet_repository";

export default async function HomePage() {
  const pets = await getPets();
  return (
    <div>
      <Search pets={pets} />
    </div>
  );
}
