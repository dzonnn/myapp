import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fontsource/markazi-text";
import "@fontsource/karla";
import HomePage from "./pages/HomePage";
import About from "./component/About";
import Layout from "./component/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
