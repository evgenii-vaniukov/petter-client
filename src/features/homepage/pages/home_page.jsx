"use client";
import { useAuthContext } from "@/features/auth/context/auth_context";
import { useRouter } from "next/navigation"; // Import useRouter
import { HomeLoggedIn } from "./home_logged_in";
import { HomeLoggedOut } from "./home_logged_out";

export function HomePage({ pets }) {
  const { loggedIn, role } = useAuthContext();
  const router = useRouter(); // Get the router object

  if (loggedIn) {
    if (role === "USER") {
      return <HomeLoggedIn pets={[pets]} />;
    } else if (role === "ADMIN") {
      // Redirect to /admin if the role is ADMIN
      router.push("/admin");
    }
  }
  return <HomeLoggedOut pets={pets} />;
}
