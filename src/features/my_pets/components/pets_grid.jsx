import { PetCardShort } from "./pet_card_short";
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export function PetsGrid() {
  return (
    <ul
      role="list"
      className="m-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:m-0 md:mt-5 lg:m-0 lg:mt-8 lg:grid-cols-3"
    >
      {people.map((person) => (
        <PetCardShort key={person.email} person={person} />
      ))}
    </ul>
  );
}
