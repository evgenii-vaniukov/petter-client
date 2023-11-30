import { Admin } from "@/features/admin_dashboard/index";
import { getPets } from "@/repository/pet/pet_repository";
export default async function AdminPage() {
  const pets = await getPets();
  return <Admin pets={pets} />;
}
