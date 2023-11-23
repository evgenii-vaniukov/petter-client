import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true",
  );
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
    localStorage.setItem("token", token);
  }, [loggedIn, token]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
