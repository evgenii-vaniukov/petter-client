import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { handleDeletePet } from "../utils/handlers";

const product = {
  name: "Zip Tote Basket",
  price: "$220",
  rating: 3.9,
  href: "#",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
  imageAlt: "Back angled view with bag open and handles to the side.",
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
};

const statuses = {
  false: "text-green-700 bg-green-50 ring-green-600/20",
  true: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function AdminPetDetails({ open, setOpen, pet, setEditPetIsOpen }) {
  const token = localStorage.getItem("token");
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {pet.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-3"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p
                          className={classNames(
                            statuses[pet.adoptionStatus],
                            "mt-0.5 inline-block whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                          )}
                        >
                          {pet.adoptionStatus ? "Adopted" : "Available"}
                        </p>

                        <div className="mt-6">
                          <h4 className="sr-only">Description</h4>

                          <p className="text-sm text-gray-700">{pet.bio}</p>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-6"
                      >
                        <form>
                          {/* Type */}
                          <div>
                            <h4 className="text-sm text-gray-600">
                              Type: {pet.type}
                            </h4>
                          </div>
                          {/* Size */}
                          <div>
                            <h4 className="text-sm text-gray-600">
                              Size: {pet.size}
                            </h4>
                          </div>
                          {/* Breed */}
                          <div>
                            <h4 className="text-sm text-gray-600">
                              Breed: {pet.breed}
                            </h4>
                          </div>
                          {/* Hypoallergenic */}
                          <div>
                            <h4 className="text-sm text-gray-600">
                              Hypoallergenic:{" "}
                              {pet.hypoallergenic ? "Yes" : "No"}
                            </h4>
                          </div>

                          {/* Dietary Restrictions */}
                          <div>
                            <h4 className="text-sm text-gray-600">
                              Dietary Restrictions: {pet.dietaryRestrictions}
                            </h4>
                          </div>

                          {/* Colors */}
                          <div>
                            <h4 className="text-sm text-gray-600">
                              Color: {pet.color}
                            </h4>
                          </div>

                          <div className="mt-6">
                            <button
                              type="submit"
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                              onClick={(e) => {
                                e.preventDefault();
                                setEditPetIsOpen(true);
                                setOpen(false);
                              }}
                            >
                              Edit
                            </button>
                          </div>

                          <p className="absolute left-4 top-4 text-center sm:static sm:mt-6">
                            <a
                              href={product.href}
                              className="font-medium text-red-600 hover:text-red-900"
                              onClick={() => {
                                handleDeletePet(pet.id, token);
                                // setOpen(false);
                              }}
                            >
                              Delete
                            </a>
                          </p>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
