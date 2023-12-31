"use client";
import { ProfileIcon } from "@/components/navbar/profile_icon";
import { LogIn } from "@/features/auth/components/log_in_modal";
import { SignUp } from "@/features/auth/components/sign_up_modal";
import { useAuthContext } from "@/features/auth/context/auth_context";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import { PetSearchBar } from "./pet_search_bar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Navbar({ pets }) {
  // TODO: Stop relying on pets prop
  const [searchBarIsOpened, setSearchBarIsOpened] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logInModalOpen, setLogInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const { loggedIn } = useAuthContext();
  return (
    <div>
      <LogIn
        logInModalOpen={logInModalOpen}
        setLogInModalOpen={setLogInModalOpen}
        setSignUpModalOpen={setSignUpModalOpen}
      />
      <SignUp
        signUpModalOpen={signUpModalOpen}
        setSignUpModalOpen={setSignUpModalOpen}
      />
      <PetSearchBar
        open={searchBarIsOpened}
        setOpen={setSearchBarIsOpened}
        pets={pets}
      />
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900">
                      Home
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    {!loggedIn && (
                      <button
                        className="-m-2 block p-2 font-medium text-gray-900"
                        onClick={() => {
                          setLogInModalOpen(true);
                          setMobileMenuOpen(false);
                        }}
                      >
                        Sign in
                      </button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </div>

              {/* Nav pages */}
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    href="/"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Home
                  </Link>
                </div>
              </div>
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    href="/search"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Search
                  </Link>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!loggedIn && (
                    <button
                      href="#"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      onClick={() => {
                        setLogInModalOpen(true);
                      }}
                    >
                      Sign in
                    </button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      onClick={() => setSearchBarIsOpened((prev) => !prev)}
                    />
                  </a>
                </div>

                {/* Profile dropdown */}
                {loggedIn && <ProfileIcon />}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
