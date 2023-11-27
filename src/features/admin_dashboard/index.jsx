import { AuthContextProvider } from "@/features/auth/context/auth_context";
import { PetDetailsProvider } from "@/features/pet_details/context/pet_details_context";
import { AdminDashboard } from "./pages/admin_dashboard";
export function Admin({ pets }) {
  return (
    <div>
      <AuthContextProvider>
        <PetDetailsProvider>
          <AdminDashboard pets={pets} />
        </PetDetailsProvider>
      </AuthContextProvider>
    </div>
  );
}
