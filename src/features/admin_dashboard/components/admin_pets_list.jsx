import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import { deletePet } from "@/repository/pet/pet_repository";
import { PlusIcon } from "@heroicons/react/20/solid";

const statuses = {
  false: "text-green-700 bg-green-50 ring-green-600/20",
  true: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
const projects = [
  {
    id: 1,
    name: "GraphQL API",
    href: "#",
    status: "Complete",
    createdBy: "Leslie Alexander",
    dueDate: "March 17, 2023",
    dueDateTime: "2023-03-17T00:00Z",
  },
  {
    id: 2,
    name: "New benefits plan",
    href: "#",
    status: "true",
    createdBy: "Leslie Alexander",
    dueDate: "May 5, 2023",
    dueDateTime: "2023-05-05T00:00Z",
  },
  {
    id: 3,
    name: "Onboarding emails",
    href: "#",
    status: "In progress",
    createdBy: "Courtney Henry",
    dueDate: "May 25, 2023",
    dueDateTime: "2023-05-25T00:00Z",
  },
  {
    id: 4,
    name: "iOS app",
    href: "#",
    status: "true",
    createdBy: "Leonard Krasner",
    dueDate: "June 7, 2023",
    dueDateTime: "2023-06-07T00:00Z",
  },
  {
    id: 5,
    name: "Marketing site redesign",
    href: "#",
    status: "false",
    createdBy: "Courtney Henry",
    dueDate: "June 10, 2023",
    dueDateTime: "2023-06-10T00:00Z",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function AdminPetsList({
  pets,
  setAddPetIsOpen,
  setEditPetIsOpen,
  setSelectedPet,
}) {
  const token = localStorage.getItem("token");

  async function handleDeletePet(id) {
    const response = await deletePet(id, token);
    if (response.status === 200) {
      window.location.reload();
    }
    if (response.status === 400) {
      alert("Bad request");
    }
    if (response.status === 401) {
      alert("Unauthorized");
    }
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {pets.map((pet) => (
        <li
          key={pet.id}
          className="flex items-center justify-between gap-x-6 py-5"
        >
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {pet.name}
              </p>
              <p
                className={classNames(
                  statuses[pet.adoptionStatus],
                  "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                )}
              >
                {pet.adoptionStatus ? "Adopted" : "Available"}
              </p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <a className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
              View pet<span className="sr-only">, {pet.name}</span>
            </a>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900",
                        )}
                        onClick={() => {
                          setSelectedPet(pet);
                          setEditPetIsOpen(true);
                        }}
                      >
                        Edit<span className="sr-only">, {pet.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900",
                        )}
                        onClick={() => handleDeletePet(pet.id)}
                      >
                        Delete<span className="sr-only">, {pet.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
      <div className="flex justify-center">
        <button
          type="button"
          className="mt-5 rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            setAddPetIsOpen(true);
          }}
        >
          <PlusIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </ul>
  );
}
