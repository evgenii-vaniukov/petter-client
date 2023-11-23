"use client";
import { AuthContextProvider } from "@/features/auth/context/auth_context";
import { SearchProvider } from "./context/search_context";
import { SearchPage } from "./pages/search_page";

export function Search({ pets }) {
  return (
    <AuthContextProvider>
      <SearchProvider>
        <SearchPage pets={pets} />
      </SearchProvider>
    </AuthContextProvider>
  );
}
