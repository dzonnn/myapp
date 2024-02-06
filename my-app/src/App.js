import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fontsource/markazi-text";
import "@fontsource/karla";
import HomePage from "./pages/HomePage";
import About from "./component/About";
import Layout from "./component/Layout";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const initialState = { avalaibleTime: [] };

const reducer = (state, action) => {
  if (action.type === "ADD_BOOKING") {
    return {
      ...state,
      avalaibleTime: [...state.avalaibleTime, action.payload],
    };
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route
              path="booking"
              element={<BookingPage state={state} dispatch={dispatch} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
