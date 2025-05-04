"use client";

import Link from "next/link";
import { useAuth } from "./AuthContext";

function Guest() {
  const { user } = useAuth();

  return (
    <div>
      {user?.image ? (
        <Link
          href="/account"
          className="flex items-center gap-4 transition-colors hover:text-accent-400"
        >
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="transition-colors hover:text-accent-400"
        >
          Guest area
        </Link>
      )}
    </div>
  );
}

export default Guest;
