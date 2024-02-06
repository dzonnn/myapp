import { useState } from "react";
import "./BookingForm.css";
import { toast } from "react-toastify";

const BookingForm = ({ state, dispatch }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guestNumber, setGuestNumber] = useState(1);
  const [occasion, setOccasion] = useState("None");
  const todayDate = () => {
    const today = new Date();
    const formattedToday = today.toISOString().substring(0, 10);
    return formattedToday;
  };
  const bookHour = (option) => {
    const d = new Date();
    let hour = d.getHours();
    if (hour >= option && todayDate() === date) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <header className="bookink-header">Book Now</header>
      <form
        className="booking-form"
        onSubmit={(e) => {
          e.preventDefault();
          const newBooking = {
            date: date,
            time: time,
            guest: guestNumber,
            occasion: occasion,
          };
          dispatch({ type: "ADD_BOOKING", payload: newBooking });
          toast.success("Booking complete", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          min={todayDate()}
          id="res-date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          onChange={(e) => {
            setTime(e.target.value);
          }}
          required
        >
          <option disabled={bookHour(17)}>17:00</option>
          <option disabled={bookHour(18)}>18:00</option>
          <option disabled={bookHour(19)}>19:00</option>
          <option disabled={bookHour(20)}>20:00</option>
          <option disabled={bookHour(21)}>21:00</option>
          <option disabled={bookHour(22)}>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => {
            setGuestNumber(e.target.value);
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
