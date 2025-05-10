"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const national_id = formData.get("national_id");
  const [nationality, country_flag] = formData.get("nationality").split("%");
  const nationalIdRegex = /^[a-zA-Z0-9]{6,13}$/;

  if (!nationalIdRegex.test(national_id))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, country_flag, national_id };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}
