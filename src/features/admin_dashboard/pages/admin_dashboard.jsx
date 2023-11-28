"use client";
import { ProfileIcon } from "@/components/navbar/profile_icon";
import { AddPetModal } from "@/features/admin_dashboard/components/add_pet/add_pet_modal";
import { useAuthContext } from "@/features/auth/context/auth_context";
import { Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { AdminPetsList } from "../components/admin_pets_list";
import { AdminUsersList } from "../components/admin_users_list";
import { EditPetModal } from "../components/edit_pet/edit_pet_modal";
import { NotAuthorized } from "./not_authorized";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [{ name: "Home", href: "#", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function AdminDashboard({ pets }) {
  const router = useRouter();
  const { loggedIn, role, setLoggedIn } = useAuthContext();
  const [addPetIsOpen, setAddPetIsOpen] = useState(false);
  const [editPetIsOpen, setEditPetIsOpen] = useState(false);

  const [selectedPet, setSelectedPet] = useState(null);

  if (loggedIn && role === "ADMIN") {
    return (
      <>
        <AddPetModal open={addPetIsOpen} setOpen={setAddPetIsOpen} />
        <EditPetModal
          open={editPetIsOpen}
          setOpen={setEditPetIsOpen}
          pet={selectedPet}
        />
        <div className="min-h-full">
          <Popover as="header" className="bg-indigo-600 pb-24">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="relative flex items-center justify-center py-5 lg:justify-between">
                    {/* Logo */}
                    <div className="absolute left-0 flex-shrink-0 lg:static">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                          alt="Your Company"
                        />
                      </a>
                    </div>
                    <h2 className="text-gray-100">Admin Dashboard</h2>

                    {/* Right section on desktop */}
                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                      <ProfileIcon iconColor="text-white" />
                    </div>

                    {/* Search */}
                    <div className="min-w-0 flex-1 px-12 lg:hidden">
                      <div className="mx-auto w-full max-w-xs">
                        <label htmlFor="desktop-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="desktop-search"
                            className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Menu button */}
                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                    <div className="grid grid-cols-3 items-center gap-8">
                      <div className="col-span-2">
                        <nav className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? "text-white" : "text-indigo-100",
                                "rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10",
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                      <div>
                        <div className="mx-auto w-full max-w-md">
                          <label htmlFor="mobile-search" className="sr-only">
                            Search
                          </label>
                          <div className="relative text-white focus-within:text-gray-600">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <MagnifyingGlassIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="mobile-search"
                              className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                              placeholder="Search"
                              type="search"
                              name="search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Transition.Root as={Fragment}>
                  <div className="lg:hidden">
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                      >
                        <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="pb-2 pt-3">
                            <div className="flex items-center justify-between px-4">
                              <div>
                                <img
                                  className="h-8 w-auto"
                                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                  alt="Your Company"
                                />
                              </div>
                              <div className="-mr-2">
                                <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                  <span className="absolute -inset-0.5" />
                                  <span className="sr-only">Close menu</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                              <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                Home
                              </a>
                            </div>
                          </div>
                          <div className="pb-2 pt-4">
                            <div className="flex items-center px-5">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3 min-w-0 flex-1">
                                <div className="truncate text-base font-medium text-gray-800">
                                  {user.name}
                                </div>
                                <div className="truncate text-sm font-medium text-gray-500">
                                  {user.email}
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                              <a
                                onClick={() => {
                                  router.push("/");
                                  setLoggedIn(false);
                                }}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                Sign out
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition.Child>
                  </div>
                </Transition.Root>
              </>
            )}
          </Popover>
          <main className="-mt-24 pb-8">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="sr-only">Page title</h1>
              {/* Main 3 column grid */}
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                  <section aria-labelledby="section-1-title">
                    <h2 className="sr-only" id="section-1-title">
                      Section title
                    </h2>
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="p-6">
                        <AdminPetsList
                          pets={pets}
                          setAddPetIsOpen={setAddPetIsOpen}
                          setEditPetIsOpen={setEditPetIsOpen}
                          setSelectedPet={setSelectedPet}
                        />
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right column */}
                <div className="grid grid-cols-1 gap-4">
                  <section aria-labelledby="section-2-title">
                    <h2 className="sr-only" id="section-2-title">
                      Section title
                    </h2>
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="p-6">
                        <AdminUsersList></AdminUsersList>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                <span className="block sm:inline">
                  &copy; 2021 Your Company, Inc.
                </span>{" "}
                <span className="block sm:inline">All rights reserved.</span>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  } else {
    return <NotAuthorized />;
  }
}
