"use client";
import { useRouter } from "next/navigation";

import { PetCard } from "./pet_card";

export function PetsList({ petList }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      {petList.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          onClick={() => {
            router.push(`/petdetails/${pet.id}`);
          }}
        />
      ))}
    </div>
  );
}
