"use client";
import { createContext, useContext, useState } from "react";

export const PetDetails = createContext(null);

export function PetDetailsProvider({ children }) {
  const [petDetailsAreOpened, setPetDetailsAreOpened] = useState(false);
  const [selectedPet, setSelectedPet] = useState({});

  return (
    <PetDetails.Provider
      value={{
        petDetailsAreOpened,
        setPetDetailsAreOpened,
        selectedPet,
        setSelectedPet,
      }}
    >
      {children}
    </PetDetails.Provider>
  );
}

export function usePetDetailsContext() {
  return useContext(PetDetails);
}
