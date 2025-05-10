"use client";

import { useAuth } from "./AuthContext";

function GuestGreeting() {
  const session = useAuth();
  const firstName = session?.user?.name.split(" ")[0];
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome , {firstName}
    </h2>
  );
}

export default GuestGreeting;
