"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true",
  );
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "",
  );
  const [role, setRole] = useState(
    localStorage.getItem("role") ? localStorage.getItem("role") : "",
  );

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  }, [loggedIn, role, token]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        token,
        setToken,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
