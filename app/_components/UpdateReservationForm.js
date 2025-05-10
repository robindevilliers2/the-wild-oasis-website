"use client";

import { useFormStatus } from "react-dom";
import { updateReservation } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

function UpdateReservationForm({ booking }) {
  const {
    id: bookingId,
    cabins: { maxCapacity },
    observations,
    numGuests,
  } = booking;
  return (
    <form
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
      action={updateReservation}
    >
      <input type="hidden" name="bookingId" id="bookingId" value={bookingId} />
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          defaultValue={numGuests}
          key={numGuests}
          name="numGuests"
          id="numGuests"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          required
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          defaultValue={observations}
          name="observations"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? <SpinnerMini /> : "Update reservation"}
    </button>
  );
}

export default UpdateReservationForm;
