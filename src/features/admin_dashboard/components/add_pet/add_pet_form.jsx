import { useAuthContext } from "@/features/auth/context/auth_context";
import { createPet } from "@/repository/pet/pet_repository";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import {
  dietaryRestrictions,
  hypoallergenic,
  petSizes,
  petTypes,
} from "./constants/pet_types";
import { Dropdown } from "./dropdown";

export function AddPetForm({ setOpen }) {
  const { token } = useAuthContext();
  const [petType, setPetType] = useState(petTypes[0]);
  const [petSize, setPetSize] = useState(petSizes[0]);
  const [petHypoallergenic, setPetHypoallergenic] = useState(hypoallergenic[0]);
  const [petDietaryRestrictions, setPetDietaryRestrictions] = useState(
    dietaryRestrictions[0],
  );
  const petName = useRef("Sharik");
  const petBio = useRef("");
  const petPhotoUrl = useRef("");
  const petColor = useRef("");
  const petBreed = useRef("");

  async function handleSubmit(event) {
    event.preventDefault();

    const pet = {
      adoptionStatus: "false",
      name: petName.current.value,
      type: petType.name,
      size: petSize.name,
      hypoallergenic: petHypoallergenic.name,
      dietaryRestrictions: petDietaryRestrictions.name,
      bio: petBio.current.value,
      picturePath: petPhotoUrl.current.value,
      color: petColor.current.value,
      breed: petBreed.current.value,
    };
    const response = await createPet(pet, token);

    if (response.status === 200) {
      alert("Pet was successfully created");
      setOpen(false);
    }

    if (response.status === 400) {
      alert("Invalid input");
    }

    if (response.status === 401) {
      alert("Not authorized");
    }
  }

  return (
    <form className="ml-10">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Pet Profile
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <Dropdown
                label={"Pet Type"}
                options={petTypes}
                selected={petType}
                setSelected={setPetType}
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pet Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    Name:
                  </span>
                  <input
                    ref={petName}
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Jessey"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <Dropdown
                label={"Pet Size"}
                options={petSizes}
                selected={petSize}
                setSelected={setPetSize}
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Color
              </label>
              <div className="mt-2">
                <input
                  ref={petColor}
                  type="text"
                  name="pet-color"
                  id="pet-color"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Brown"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <Dropdown
                label={"Hypoallergenic"}
                options={hypoallergenic}
                selected={petHypoallergenic}
                setSelected={setPetHypoallergenic}
              />
            </div>
            <div className="sm:col-span-4">
              <Dropdown
                label={"Dietary Restrictions"}
                options={dietaryRestrictions}
                selected={petDietaryRestrictions}
                setSelected={setPetDietaryRestrictions}
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Breed
              </label>
              <div className="mt-2">
                <input
                  ref={petBreed}
                  type="text"
                  name="pet-breed"
                  id="pet-breed"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="York"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bio
              </label>
              <div className="mt-2">
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about a pet.
                </p>
                <textarea
                  ref={petBio}
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter picture url OR upload a picture
              </label>
              <div>
                <label htmlFor="url" className="sr-only">
                  URL
                </label>
                <input
                  ref={petPhotoUrl}
                  type="url"
                  name="pet-photo"
                  id="pet-photo"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="https://example.com"
                />
              </div>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />

                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a picture</span>

                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
}
