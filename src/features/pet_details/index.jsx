export function PetPage({ pet }) {
  console.log(pet);
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              Leatherbound Daily Journal
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              All in the Details
            </p>
            <p className="mt-4 text-gray-500">
              We have obsessed over every detail of this handcrafted journal to
              bring you the best materials for daily use.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              <div key={pet.name}>
                <dt className="font-medium text-gray-900">{pet.type}</dt>
                <dd className="mt-2 text-gray-500">{pet.bio}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
