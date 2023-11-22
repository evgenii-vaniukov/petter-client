"use client";
import { useRouter } from "next/navigation";

import { PetCard } from "./pet_card";

export function PetsList({ pets }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
