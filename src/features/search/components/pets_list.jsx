"use client";

import { PetCard } from "../../../components/pet_card";

export function PetsList({ petList, setPetDetailsAreOpened, setSelectedPet }) {
  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      {petList.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          onClick={() => {
            setSelectedPet(pet);
            setPetDetailsAreOpened(true);
          }}
        />
      ))}
    </div>
  );
}
