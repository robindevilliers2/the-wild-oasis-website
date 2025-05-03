"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Cannot use AuthContext outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
