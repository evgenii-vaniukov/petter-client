"use client";
import { AuthContextProvider } from "@/features/auth/context/auth_context";
import { PetDetailsProvider } from "@/features/pet_details/context/pet_details_context";
import { HomePage } from "./pages/home_page";

export function Home({ pets }) {
  return (
    <AuthContextProvider>
      <PetDetailsProvider>
        <HomePage pets={pets} />
      </PetDetailsProvider>
    </AuthContextProvider>
  );
}
