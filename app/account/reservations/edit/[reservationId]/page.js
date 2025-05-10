import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  // CHANGE
  const { reservationId } = await params;
  const booking = await getBooking(reservationId);

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Edit Reservation #{reservationId}
      </h2>
      <UpdateReservationForm booking={booking} />
    </div>
  );
}
