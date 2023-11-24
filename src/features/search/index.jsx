"use client";
import { AuthContextProvider } from "@/features/auth/context/auth_context";
import { PetDetailsProvider } from "@/features/pet_details/context/pet_details_context";
import { SearchProvider } from "./context/search_context";
import { SearchPage } from "./pages/search_page";
export function Search({ pets }) {
  return (
    <AuthContextProvider>
      <SearchProvider>
        <PetDetailsProvider>
          <SearchPage pets={pets} />
        </PetDetailsProvider>
      </SearchProvider>
    </AuthContextProvider>
  );
}
