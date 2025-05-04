"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { data: session } = useSession();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(session?.user);
  }, [session]);

  function resetAuth() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ session, user, resetAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Cannot use AuthContext outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
