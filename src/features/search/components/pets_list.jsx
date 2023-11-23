"use client";
import { useRouter } from "next/navigation";

import { PetDetails } from "@/features/pet_details/index";
import { useState } from "react";
import { PetCard } from "../../../components/pet_card";

export function PetsList({ petList }) {
  const router = useRouter();
  const [detailIsOpened, setDetailIsOpened] = useState(false);
  const [selectedPet, setSelectedPet] = useState({});
  return (
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      <PetDetails
        open={detailIsOpened}
        setOpen={setDetailIsOpened}
        pet={selectedPet}
      />
      {petList.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          onClick={() => {
            // router.push(`/petdetails/${pet.id}`);
            setSelectedPet(pet);
            setDetailIsOpened(true);
          }}
        />
      ))}
    </div>
  );
}
