export function PetCard({ pet }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        {/* <img
          src={pet.imageSrc}
          alt={pet.imageAlt}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        /> */}
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={pet.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {pet.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{pet.bio}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{pet.color}</p>
        </div>
      </div>
    </div>
  );
}
