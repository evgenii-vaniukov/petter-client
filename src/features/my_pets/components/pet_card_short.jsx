import { useAuthContext } from "@/features/auth/context/auth_context";
import { PresentationChartBarIcon, TagIcon } from "@heroicons/react/20/solid";
import { returnPetHandler } from "../utils/handlers";

export function PetCardShort({ pet, setPetDetailsAreOpened, onClick }) {
  const { token } = useAuthContext();
  return (
    <li
      key={pet.email}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      onClick={onClick}
    >
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {pet.name}
            </h3>
            <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {"Adopted by you"}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">{pet.title}</p>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={pet.imageUrl}
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <button
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              onClick={() => {
                returnPetHandler(pet.id, token);
              }}
            >
              <TagIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Return
            </button>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <button
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              onClick={() => setPetDetailsAreOpened(true)}
            >
              <PresentationChartBarIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              View Details
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
