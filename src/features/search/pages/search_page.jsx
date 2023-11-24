"use client";
import { Button_L } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { PetDetails } from "@/components/pet_details";
import { filters } from "@/features/search/constants/filters";
import { getPetsWithFilters } from "@/repository/pet/pet_repository";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { Checkbox } from "../components/checkbox";
import { PetsList } from "../components/pets_list";
import { useSearchContext } from "../context/search_context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function SearchPage({ pets }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [petList, setPetList] = useState(pets);
  const {
    compostiteFilter,
    setCompositeFilter,
    petDetailsAreOpened,
    setPetDetailsAreOpened,
    selectedPet,
    setSelectedPet,
  } = useSearchContext();

  useEffect(() => {
    const savedCompostiteFilter = JSON.parse(
      sessionStorage.getItem("compostiteFilter"),
    );

    if (savedCompostiteFilter) {
      setCompositeFilter(savedCompostiteFilter);
    }
  }, [setCompositeFilter]);

  useEffect(() => {
    sessionStorage.setItem(
      "compostiteFilter",
      JSON.stringify(compostiteFilter),
    );
  }, [compostiteFilter]);

  async function searchPets() {
    const data = await getPetsWithFilters(compostiteFilter);
    setPetList(data);
  }

  return (
    <div className="bg-white">
      <Navbar pets={pets} />
      <div>
        <PetDetails
          open={petDetailsAreOpened}
          setOpen={setPetDetailsAreOpened}
          pet={selectedPet}
        />
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform",
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <Checkbox
                                    key={option.value}
                                    section={section}
                                    option={option}
                                    optionIdx={optionIdx}
                                  />
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Find your next friend
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!
            </p>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <Checkbox
                              key={option.value}
                              section={section}
                              option={option}
                              optionIdx={optionIdx}
                            />
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
              <Button_L onClick={searchPets}>Search</Button_L>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <PetsList
                petList={petList}
                setPetDetailsAreOpened={setPetDetailsAreOpened}
                setSelectedPet={setSelectedPet}
              />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
