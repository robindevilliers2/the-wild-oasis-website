import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";
import { useAuth } from "./AuthContext";

function SignOutButton() {
  const { resetAuth } = useAuth();

  async function handleSignOut() {
    resetAuth();
    await signOutAction();
  }

  return (
    <form action={handleSignOut}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
