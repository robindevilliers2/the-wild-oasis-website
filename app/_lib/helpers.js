export const omitProperties = (obj, omitKeys) => {
  return Object.keys(obj).reduce((result, key) => {
    if (!omitKeys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};

export function mapToLocalGuestsObject(guest) {
  if (!guest) return;
  return {
    ...omitProperties(guest, ["national_id", "full_name", "country_flag"]),
    fullName: guest.full_name,
    countryFlag: guest.country_flag,
    nationalID: guest.national_id,
  };
}

export function mapToLocalCabinsObject(cabin) {
  if (!cabin) return;
  return {
    ...omitProperties(cabin, ["max_capacity", "regular_price"]),
    maxCapacity: cabin.max_capacity,
    regularPrice: cabin.regular_price,
  };
}

export function mapToLocalObject(booking) {
  if (!booking) return;

  return {
    ...omitProperties(booking, [
      "start_date",
      "end_date",
      "num_nights",
      "num_guests",
      "cabin_price",
      "extras_price",
      "total_price",
      "has_breakfast",
      "is_paid",
      "cabin_id",
      "guest_id",
    ]),
    startDate: booking.start_date,
    endDate: booking.end_date,
    numNights: booking.num_nights,
    numGuests: booking.num_guests,
    cabinPrice: booking.cabin_price,
    extrasPrice: booking.extras_price,
    totalPrice: booking.total_price,
    hasBreakfast: booking.has_breakfast,
    isPaid: booking.is_paid,
    cabinId: booking.cabin_id,
    guestId: booking.guest_id,
    cabins: mapToLocalCabinsObject(booking.cabins),
    guests: mapToLocalGuestsObject(booking.guests),
  };
}
