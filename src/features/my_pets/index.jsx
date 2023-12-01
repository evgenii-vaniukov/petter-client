"use client";
import { Navbar } from "@/components/navbar/navbar.jsx";
import {
  getUserAdoptedPets,
  getUserSavedPets,
} from "@/repository/user/user_repository";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "../auth/context/auth_context.jsx";
import { PetDetailsProvider } from "../pet_details/context/pet_details_context.jsx";
import { NoPets } from "./components/no_pets.jsx";
import { PetDetails } from "./components/pet_details.jsx";
import { PetsGrid } from "./components/pets_grid.jsx";
import { Tabs } from "./components/tabs.jsx";

export function MyPets({ pets }) {
  const token = localStorage.getItem("token");

  const [userAdoptedPets, setUserAdoptedPets] = useState([]);
  const [userSavedPets, setUserSavedPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState({});
  const [petDetailsAreOpened, setPetDetailsAreOpened] = useState(false);
  const tabs = [
    {
      code: "adopted",
      name: "Adopted Pets",
      href: "#",
      count: `${userAdoptedPets.length}`,
      current: true,
    },
    {
      code: "saved",
      name: "Saved Pets",
      href: "#",
      count: `${userSavedPets.length}`,
      current: false,
    },
  ];
  const [tab, setTab] = useState(tabs[0]);

  useEffect(() => {
    if (!token) {
      return;
    }

    async function fetchUserAdoptedPets() {
      const response = await getUserAdoptedPets(token);

      if (response.status === 200) {
        setUserAdoptedPets(response.data);
      }
      if (response.status === 400) {
        alert("Bad request");
      }
      if (response.status === 401) {
        alert("Unauthorized");
      }
    }

    async function fetchUserSavedPets() {
      const response = await getUserSavedPets(token);

      if (response.status === 200) {
        setUserSavedPets(response.data);
      }
      if (response.status === 400) {
        alert("Bad request");
      }
      if (response.status === 401) {
        alert("Unauthorized");
      }
    }

    fetchUserAdoptedPets();
    fetchUserSavedPets();
  }, [token]);

  if (userAdoptedPets.length !== 0) {
    return (
      // TODO: Refactor pet deatils provider
      <AuthContextProvider>
        <PetDetailsProvider>
          <div className="min-h-full">
            <PetDetails
              open={petDetailsAreOpened}
              setOpen={setPetDetailsAreOpened}
              pet={selectedPet}
            />
            <Navbar pets={pets} />
            <div className="py-10">
              <header>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                    Your pets
                  </h1>

                  <Tabs tabss={tabs} setTab={setTab} />
                </div>
              </header>
              <main>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  {tab.code === "adopted" ? (
                    <PetsGrid
                      pets={userAdoptedPets}
                      setSelectedPet={setSelectedPet}
                      setPetDetailsAreOpened={setPetDetailsAreOpened}
                      tab={tab}
                    />
                  ) : (
                    <PetsGrid
                      pets={userSavedPets}
                      setSelectedPet={setSelectedPet}
                      setPetDetailsAreOpened={setPetDetailsAreOpened}
                      tab={tab}
                    />
                  )}
                </div>
              </main>
            </div>
          </div>
        </PetDetailsProvider>
      </AuthContextProvider>
    );
  } else {
    return <NoPets />;
  }
}
