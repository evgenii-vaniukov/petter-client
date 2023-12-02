import { AuthContextProvider } from "@/features/auth/context/auth_context";
import { AdminDashboard } from "./pages/admin_dashboard";
export function Admin({ pets }) {
  return (
    <AuthContextProvider>
      <AdminDashboard pets={pets} />
    </AuthContextProvider>
  );
}
