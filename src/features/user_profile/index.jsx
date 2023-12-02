import { AuthContextProvider } from "../auth/context/auth_context";
import { UserProfileComponent } from "./pages/user_profile";
export function UserProfile() {
  return (
    <AuthContextProvider>
      <UserProfileComponent />
    </AuthContextProvider>
  );
}
