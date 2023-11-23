export default function PetDetails({ params: { id } }) {
  return (
    <div>
      <h1>Pet Details</h1>
      <h2>{id}</h2>
    </div>
  );
}
