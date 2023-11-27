"use client";
import { Navbar } from "@/components/navbar/navbar.jsx";
import { AuthContextProvider } from "../auth/context/auth_context.jsx";
import { PetDetailsProvider } from "../pet_details/context/pet_details_context.jsx";
import { PetsGrid } from "./components/pets_grid.jsx";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export function MyPets({ pets }) {
  return (
    <AuthContextProvider>
      <PetDetailsProvider>
        <div className="min-h-full">
          <Navbar pets={pets} />

          <div className="py-10">
            <header>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <PetsGrid />
              </div>
            </main>
          </div>
        </div>
      </PetDetailsProvider>
    </AuthContextProvider>
  );
}
