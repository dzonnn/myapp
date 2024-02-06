import BookingForm from "../component/BookingForm";

const BookingPage = ({ state, dispatch }) => {
  return (
    <>
      <BookingForm state={state} dispatch={dispatch} />
    </>
  );
};
export default BookingPage;
