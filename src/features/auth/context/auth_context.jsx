"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" &&
      window.localStorage.getItem("loggedIn") === "true",
  );
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "",
  );
  const [role, setRole] = useState(
    localStorage.getItem("role") ? localStorage.getItem("role") : "",
  );
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") ? localStorage.getItem("firstName") : "",
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") ? localStorage.getItem("lastName") : "",
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") ? localStorage.getItem("email") : "",
  );

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
  }, [loggedIn, role, token, firstName, lastName, email]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        token,
        setToken,
        role,
        setRole,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
